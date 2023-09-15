import fs from 'fs';

function dataWriter<T>(fileName: string, data: T): void {
    const jsonData = JSON.stringify(data, null, 2);

    console.log(jsonData);
    fs.writeFileSync(fileName, jsonData);
}

export default dataWriter;