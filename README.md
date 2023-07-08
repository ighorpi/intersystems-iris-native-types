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
import { Injectable, OnModuleInit } from '@nestjs/common';
import native, { Connection, Iris } from 'intersystems-iris-native';
import * as irisnative from 'intersystems-iris-native';

@Injectable()
export class IrisService implements OnModuleInit {
  private connection: Connection;
  public iris: Iris;

  private createConnectionFactory(irisnative: typeof native) {
    return irisnative.createConnection({
      host: String(process.env.IRIS_HOST),
      port: Number(process.env.IRIS_PORT),
      ns: String(process.env.IRIS_NAMESPACE),
      user: String(process.env.IRIS_USER),
      pwd: String(process.env.IRIS_PASSWORD),
    });
  }

  onModuleInit() {
    this.connection = this.createConnectionFactory(irisnative);
    this.iris = this.connection.createIris();
  }

  example() {
    console.log(this.iris.get('global', 1))
  }
}

```

