import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  constructor() {}

  @Query(() => String)
  async helloworld() {
    return 'hello world!!';
  }
}
