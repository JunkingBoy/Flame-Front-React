export class DataContainer<T> {
    code?: number;
    msg?: string;

    private serializedData: T | T[] = [];

    constructor(code?: number, msg?: string, input?: any) {
        this.code = code;
        this.msg = msg;

        if (input != undefined) {
            try {
                if (Array.isArray(input)) {
                    this.serializedData = input as T[];
                } else {
                    this.serializedData = input as T;
                }
            } catch (error) {
                console.log('Error serializing input data:', error);
            }
        }
    }

    getFullObject(): { code?: number; msg?: string; serializedData: T | T[]; } {
        return { code: this.code, msg: this.msg, serializedData: this.serializedData };
    }

    getValue<Key extends keyof T>(keyOrIndex: Key | number): T[Key] | T {
        if (Array.isArray(this.serializedData)) {
            let index: number = typeof keyOrIndex === 'number' ? keyOrIndex : parseInt(keyOrIndex as any);

            if (index >= 0 && index < this.serializedData.length) {
                return this.serializedData[index];
            } else {
                throw new Error('Invalid index');
            }
        } else {
            return this.serializedData[keyOrIndex as Key];
        }
    }
}