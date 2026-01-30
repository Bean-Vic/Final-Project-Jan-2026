import { add } from 'src/example/util';

describe('测试套件：add 函数', () => {
    it('1+1 =2 ', () => {
        const result = add(1, 1);
        expect(result).toBe(2);
    })
})