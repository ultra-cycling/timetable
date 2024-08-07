import React from 'react';
import {getDateTime, timeFromDateTime, weekdayFromDateTime} from "../util/date";
import {uuid} from "../util/uuid";
import {DEFAULT_AVERAGES} from "../util/constants";
import {getTotalDistanceFromStages} from "../domain/calculation";
import {roundWithDigits} from "../util/format";
import {AlertEmptyStages} from "./alerts";

// TODO localize and translate labels

export class AudaxSuisseTimetable extends React.Component {

    render() {
        const event = this.props.event;

        if (this.props.event === null || this.props.event.length === 0) {
            return (<AlertEmptyStages />);
        }

        const averages = this.props.averages || DEFAULT_AVERAGES;
        const startTime = getDateTime(this.props.startTime);
        const timeLimit = Number(this.props.timeLimit);
        const totalDistance = getTotalDistanceFromStages(event);
        const minAverage = totalDistance / timeLimit;

        averages.push(minAverage);
        averages.sort();

        const tableData = {
            header1: {
                cols: generateHeader1Cols(...averages)
            },
            header2: {
                cols: generateHeader2Cols(averages.length)
            },
            stages: generateStageRows(event, startTime, 40, averages)
        }
        return (
            <table className={"table tr-hover"}>
                <colgroup>
                {
                    [...Array(tableData.header1.cols.length - 2).keys()].map(index => {
                        const cssClass = (index !== 0) ? ((index % 2 === 1) ? 'col-bg-lightgray' : 'col-bg-darkgray') : '';
                        return (<col key={index} span={2} className={cssClass} />);
                    })
                }
                </colgroup>
                <thead>
                <tr>
                    {
                        tableData.header1.cols.map((col, index) => {
                            return <th key={index} colSpan={col.colspan} rowSpan={col.rowspan} scope="colgroup">{col.caption}</th>;
                        })
                    }
                </tr>
                <tr>
                    {
                        tableData.header2.cols.map((col, index) => {
                            return (<th key={index} scope={"col"}>{col.caption}</th>);
                        })
                    }
                </tr>
                </thead>
                <tbody>
                {
                    tableData.stages.map((stage, stageIndex) => {
                        return (
                            <tr data-testid={"stages-row"} key={stage.id}>
                                <th scope={"row"}>{stage.from}</th>
                                <td>{stage.km}</td>
                                {
                                    stage.arrivalTimes.map((arrivalTime, colIndex) => {
                                        const rowSpan = stage.rowSpans[colIndex];
                                        return(
                                            //(rowSpan > 0 ? <td rowSpan={rowSpan} key={colIndex}>{arrivalTime}</td> : <></>)
                                            (rowSpan > 0 ? <td key={colIndex}>{arrivalTime}</td> : <td key={colIndex}></td>)
                                        );
                                    })
                                }
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
            // TODO add an export button for Excel download
        );
    }

}

function generateHeader1Cols(...args) {
    const headerCols = new Array(args.length + 2);
    headerCols.push(
        {caption: "Checkpoint", rowspan: 2, colspan: 1},
        {caption: "km", rowspan: 2, colspan: 1}
    );
    args.forEach((arg) => {headerCols.push({caption: `ø ${roundWithDigits(arg, 2)} km/h`, rowspan: 1, colspan: 2})});
    return headerCols;
}

function generateHeader2Cols(length) {
    const headerCols = new Array(length);
    for (let i = 0; i < length; i++) {
        headerCols.push(
            {caption: "Day"},
            {caption: "Arrival"},
        );
    }
    return headerCols;
}

function calcArrivalTime(departure, distance, average) {
    return departure.plus({minutes: Number(distance) / Number(average) * 60});;
}

function calculateRowSpans(arrivalTimes) {
    const daysOnly = arrivalTimes.map((arrivalTimesForStage) => {
        return arrivalTimesForStage.filter((_, index) => {
            return index % 2 === 0;
        });
    });

    let lastDays = daysOnly[0];
    let daysCount = [];

    for(var dayIndex = 0; dayIndex < daysOnly[0].length; dayIndex++) {
        let dayCount = 0;
        let daysCountForAverage = [];
        for (var stageIndex = 0; stageIndex < daysOnly.length; stageIndex++) {
            if (daysOnly[stageIndex][dayIndex] === lastDays[dayIndex]) {
                dayCount++;
            } else {
                lastDays[dayIndex] = daysOnly[stageIndex][dayIndex];
                daysCountForAverage.push(dayCount);
                dayCount = 1;
            }
        }
        daysCountForAverage.push(dayCount);
        daysCount.push(daysCountForAverage);
    }

    let rowSpansVertical = daysCount.map(daysCountForAverage => {
        return daysCountForAverage.flatMap(daysCount => {
            let rowSpansPerAverage = [daysCount];
            for (let i = 1; i < daysCount; i++) {
                rowSpansPerAverage.push(-1);
            }
            return rowSpansPerAverage;
        })
    });

    return rowSpansVertical[0].map((_, colIndex) => rowSpansVertical.flatMap(row => [row[colIndex], 1]));
}

function generateStageRows(stages, startTime, timeLimit, averages) {
    let departures = averages.map(_ => {return startTime});
    const arrivalTimes = [{distance: 0}, ...stages].map(stage => {
        return (
            averages.flatMap((average, averageIndex) => {
                const arrivalTime = calcArrivalTime(departures[averageIndex], stage.distance, average);
                departures[averageIndex] = arrivalTime;
                return [weekdayFromDateTime(arrivalTime), timeFromDateTime(arrivalTime)]
            })
        );
    });
    const rowSpans = calculateRowSpans(arrivalTimes);
    const stageRows = [];
    const initialStage = {id: uuid(), to: stages[0].from, distance: 0}
    departures = averages.map(_ => {return startTime});
    [initialStage, ...stages].forEach((stage, index) => {
        stageRows.push({
            id: stage.id,
            from: stage.to,
            km: stage.distance,
            arrivalTimes: arrivalTimes[index],
            rowSpans: rowSpans[index],
        });
    });
    return stageRows;
}