import { LinkedList } from "./LinkedList";
export default class FixedSizeLinkedList extends LinkedList {
    size: number;
    maintainHigh?: boolean;
    maintainLow?: boolean;
    maintainSum?: boolean;
    totalPushed: number;
    periodHigh: number;
    periodLow: number;
    periodSum: number;
    lastShift: number;
    _push: (data: number) => void;
    constructor(size: number, maintainHigh?: boolean, maintainLow?: boolean, maintainSum?: boolean);
    add(data: number): void;
    iterator(): Generator<any, void, unknown>;
    calculatePeriodHigh(): void;
    calculatePeriodLow(): void;
}
