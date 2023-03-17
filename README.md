# intersystems-iris-native
nodejs lib for intersystems iris native

#### add to package.json
```
"dependencies": {
    "intersystems-iris-native": "https://github.com/ighorpi/intersystems-iris-native.git"
...
},
"devDependencies": {
    "@types/intersystems-iris-native": "https://github.com/ighorpi/intersystems-iris-native-types.git",
...
}
```

#### example:
- example in a nestjs provider/service
```typescript
import { Injectable } from '@nestjs/common';
import native, { Connection, Iris } from 'intersystems-iris-native';
const irisnative = require('intersystems-iris-native')

@Injectable()
export class Example {
    private connection: Connection;
    private iris: Iris;

    private createConnectionFactory(irisnative: typeof native) {
        return irisnative.createConnection({host: 'localhost', port: 1972, ns:'SITE',user:'example',pwd:'123456'})
    }
    constructor() {
        this.connection = this.createConnectionFactory(irisnative)
        this.iris = this.connection.createIris()
        this.example()
    }
    example() {
        console.log(this.iris.get('global', 1))
    }
}

```

