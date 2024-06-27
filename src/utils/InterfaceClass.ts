export class DataContainer<T> {
    code: number;
    msg: string;

    private serializedData: T | T[] = [];

    constructor(code: number, msg: string, input: any) {
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

    public getFullObject(): { code: number; msg: string; serializedData: T | T[]; } {
        return { code: this.code, msg: this.msg, serializedData: this.serializedData };
    }

    public getValue<Key extends keyof T>(keyOrIndex: Key | number): T[Key] | T {
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

    public getSerializedData(): T | T[] {
        return this.serializedData;
    }
}

// 这个类用来处理从接口请求回来的数据.包括项目名称、用例数量、用例完成度
/**
 * 传入project表的项目信息.
 * 项目表关联查询到用例的信息
 * 根据项目表计算用例相关信息
 * 计算用例完成度
 * 提供前四条项目信息的方法.如果不足四条则有多少条返回多少条
 * 返回全部项目的项目信息和用例数量信息
 */
export class ProCalContainer<T> {
    private data: DataContainer<T>;
    constructor(data: DataContainer<T>) {
        this.data = data;
    }

    // 定义清晰case的接口返回值
    public getCompletenes<Key extends keyof T>(keyOrIndex: Key, key2: Key): number {
        let finish: number = 0;
        let total: number = 0;
        if (Array.isArray(this.data.getSerializedData())) {
            return total;
        } else {
            total = this.data.getValue(keyOrIndex) as number;
            finish = this.data.getValue(key2) as number;

            if (total == 0) {
                return total;
            } else {
                return parseFloat((finish / total).toFixed(2)) * 100;
            }
        }
    }
}