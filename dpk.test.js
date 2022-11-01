const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
    it("Returns the literal '0' when given no input", () => {
        const trivialKey = deterministicPartitionKey();
        expect(trivialKey).toBe("0");
    });

    it("Returns partitionKey if it is defined and type of its value is string", () => {
        const event = {
            partitionKey: "Test candidate"
        }
        const candidate = deterministicPartitionKey(event);
        expect(candidate).toBe("Test candidate");
    });

    it("Returns partitionKey if it is defined and type of its value is not string", () => {
        const event = {
            partitionKey: {
                value: "test value"
            }
        }
        const candidate = deterministicPartitionKey(event);
        expect(candidate).toBe(JSON.stringify(event.partitionKey));
    });

    it("Returns crypto hash string if it is not defined", () => {
        const event = {
            value: "test value"
        }
        const candidate = deterministicPartitionKey(event);
        expect(typeof candidate).toBe("string");
    });

    it("Returns crypto hash string if length of candidate is longer than MAX_PARTITION_KEY_LENGTH", () => {
        const event = {
            partitionKey: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut venenatis ante, non elementum lacus. Suspendisse justo ante, condimentum tincidunt est sit amet, ornare accumsan nunc. Vestibulum ac cursus turpis. Suspendisse aliquet urna ut nisl pellentesque, vitae sollicitudin nisi ornare. Proin nec dignissim tellus, id iaculis orci. Duis sodales aliquet neque, non tempor dui posuere suscipit. Vivamus lacinia in metus vel mattis. Nullam sit amet ligula congue ex sollicitudin semper. Proin dapibus nisl ut tellus viverra ornare. Pellentesque porttitor, orci eget interdum suscipit, eros quam tincidunt risus, sit amet consectetur nisi erat in erat. Nullam sodales luctus sodales. Aliquam congue nisl libero, ut congue nunc pulvinar aliquet. Suspendisse vitae ipsum odio."
        }
        const candidate = deterministicPartitionKey(event);
        expect(candidate).not.toBe(event.partitionKey);
        expect(typeof candidate).toBe("string");
    });
});