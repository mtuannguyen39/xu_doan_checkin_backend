
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model Checkin
 * 
 */
export type Checkin = $Result.DefaultSelection<Prisma.$CheckinPayload>
/**
 * Model CheckinDetail
 * 
 */
export type CheckinDetail = $Result.DefaultSelection<Prisma.$CheckinDetailPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  XU_DOAN_TRUONG: 'XU_DOAN_TRUONG',
  XU_DOAN_PHO: 'XU_DOAN_PHO',
  TRUONG_TRUC: 'TRUONG_TRUC',
  TRUONG_LOP: 'TRUONG_LOP'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkin`: Exposes CRUD operations for the **Checkin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checkins
    * const checkins = await prisma.checkin.findMany()
    * ```
    */
  get checkin(): Prisma.CheckinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkinDetail`: Exposes CRUD operations for the **CheckinDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckinDetails
    * const checkinDetails = await prisma.checkinDetail.findMany()
    * ```
    */
  get checkinDetail(): Prisma.CheckinDetailDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Student: 'Student',
    Activity: 'Activity',
    Checkin: 'Checkin',
    CheckinDetail: 'CheckinDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "student" | "activity" | "checkin" | "checkinDetail"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      Checkin: {
        payload: Prisma.$CheckinPayload<ExtArgs>
        fields: Prisma.CheckinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          findFirst: {
            args: Prisma.CheckinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          findMany: {
            args: Prisma.CheckinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>[]
          }
          create: {
            args: Prisma.CheckinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          createMany: {
            args: Prisma.CheckinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>[]
          }
          delete: {
            args: Prisma.CheckinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          update: {
            args: Prisma.CheckinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          deleteMany: {
            args: Prisma.CheckinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>[]
          }
          upsert: {
            args: Prisma.CheckinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          aggregate: {
            args: Prisma.CheckinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckin>
          }
          groupBy: {
            args: Prisma.CheckinGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckinGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckinCountArgs<ExtArgs>
            result: $Utils.Optional<CheckinCountAggregateOutputType> | number
          }
        }
      }
      CheckinDetail: {
        payload: Prisma.$CheckinDetailPayload<ExtArgs>
        fields: Prisma.CheckinDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckinDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckinDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinDetailPayload>
          }
          findFirst: {
            args: Prisma.CheckinDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckinDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinDetailPayload>
          }
          findMany: {
            args: Prisma.CheckinDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinDetailPayload>[]
          }
          create: {
            args: Prisma.CheckinDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinDetailPayload>
          }
          createMany: {
            args: Prisma.CheckinDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckinDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinDetailPayload>[]
          }
          delete: {
            args: Prisma.CheckinDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinDetailPayload>
          }
          update: {
            args: Prisma.CheckinDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinDetailPayload>
          }
          deleteMany: {
            args: Prisma.CheckinDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckinDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckinDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinDetailPayload>[]
          }
          upsert: {
            args: Prisma.CheckinDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinDetailPayload>
          }
          aggregate: {
            args: Prisma.CheckinDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckinDetail>
          }
          groupBy: {
            args: Prisma.CheckinDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckinDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckinDetailCountArgs<ExtArgs>
            result: $Utils.Optional<CheckinDetailCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    student?: StudentOmit
    activity?: ActivityOmit
    checkin?: CheckinOmit
    checkinDetail?: CheckinDetailOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    checkins: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkins?: boolean | UserCountOutputTypeCountCheckinsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCheckinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    checkins: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkins?: boolean | StudentCountOutputTypeCountCheckinsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountCheckinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinWhereInput
  }


  /**
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    checkinDetails: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkinDetails?: boolean | ActivityCountOutputTypeCountCheckinDetailsArgs
  }

  // Custom InputTypes
  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountCheckinDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinDetailWhereInput
  }


  /**
   * Count Type CheckinCountOutputType
   */

  export type CheckinCountOutputType = {
    details: number
  }

  export type CheckinCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | CheckinCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * CheckinCountOutputType without action
   */
  export type CheckinCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinCountOutputType
     */
    select?: CheckinCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CheckinCountOutputType without action
   */
  export type CheckinCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    full_name: string | null
    role: $Enums.UserRole | null
    class_name: string | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    full_name: string | null
    role: $Enums.UserRole | null
    class_name: string | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    full_name: number
    role: number
    class_name: number
    created_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    full_name?: true
    role?: true
    class_name?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    full_name?: true
    role?: true
    class_name?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    full_name?: true
    role?: true
    class_name?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    full_name: string
    role: $Enums.UserRole
    class_name: string | null
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    role?: boolean
    class_name?: boolean
    created_at?: boolean
    checkins?: boolean | User$checkinsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    role?: boolean
    class_name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    role?: boolean
    class_name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    full_name?: boolean
    role?: boolean
    class_name?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "role" | "class_name" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkins?: boolean | User$checkinsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      checkins: Prisma.$CheckinPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name: string
      role: $Enums.UserRole
      class_name: string | null
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checkins<T extends User$checkinsArgs<ExtArgs> = {}>(args?: Subset<T, User$checkinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly class_name: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.checkins
   */
  export type User$checkinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkin
     */
    omit?: CheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    where?: CheckinWhereInput
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    cursor?: CheckinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    full_name: string | null
    phone: string | null
    class_name: string | null
    nganh: string | null
    qr_code: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    full_name: string | null
    phone: string | null
    class_name: string | null
    nganh: string | null
    qr_code: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    full_name: number
    phone: number
    class_name: number
    nganh: number
    qr_code: number
    is_active: number
    created_at: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    full_name?: true
    phone?: true
    class_name?: true
    nganh?: true
    qr_code?: true
    is_active?: true
    created_at?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    full_name?: true
    phone?: true
    class_name?: true
    nganh?: true
    qr_code?: true
    is_active?: true
    created_at?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    full_name?: true
    phone?: true
    class_name?: true
    nganh?: true
    qr_code?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    full_name: string
    phone: string | null
    class_name: string
    nganh: string
    qr_code: string | null
    is_active: boolean
    created_at: Date
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    phone?: boolean
    class_name?: boolean
    nganh?: boolean
    qr_code?: boolean
    is_active?: boolean
    created_at?: boolean
    checkins?: boolean | Student$checkinsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    phone?: boolean
    class_name?: boolean
    nganh?: boolean
    qr_code?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    phone?: boolean
    class_name?: boolean
    nganh?: boolean
    qr_code?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    full_name?: boolean
    phone?: boolean
    class_name?: boolean
    nganh?: boolean
    qr_code?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "phone" | "class_name" | "nganh" | "qr_code" | "is_active" | "created_at", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkins?: boolean | Student$checkinsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      checkins: Prisma.$CheckinPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name: string
      phone: string | null
      class_name: string
      nganh: string
      qr_code: string | null
      is_active: boolean
      created_at: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checkins<T extends Student$checkinsArgs<ExtArgs> = {}>(args?: Subset<T, Student$checkinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly full_name: FieldRef<"Student", 'String'>
    readonly phone: FieldRef<"Student", 'String'>
    readonly class_name: FieldRef<"Student", 'String'>
    readonly nganh: FieldRef<"Student", 'String'>
    readonly qr_code: FieldRef<"Student", 'String'>
    readonly is_active: FieldRef<"Student", 'Boolean'>
    readonly created_at: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.checkins
   */
  export type Student$checkinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkin
     */
    omit?: CheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    where?: CheckinWhereInput
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    cursor?: CheckinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    point: number | null
  }

  export type ActivitySumAggregateOutputType = {
    point: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    name: string | null
    point: number | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    point: number | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    name: number
    point: number
    is_active: number
    created_at: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    point?: true
  }

  export type ActivitySumAggregateInputType = {
    point?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    name?: true
    point?: true
    is_active?: true
    created_at?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    name?: true
    point?: true
    is_active?: true
    created_at?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    name?: true
    point?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    name: string
    point: number
    is_active: boolean
    created_at: Date
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    point?: boolean
    is_active?: boolean
    created_at?: boolean
    checkinDetails?: boolean | Activity$checkinDetailsArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    point?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    point?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    name?: boolean
    point?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "point" | "is_active" | "created_at", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkinDetails?: boolean | Activity$checkinDetailsArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      checkinDetails: Prisma.$CheckinDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      point: number
      is_active: boolean
      created_at: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checkinDetails<T extends Activity$checkinDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Activity$checkinDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly name: FieldRef<"Activity", 'String'>
    readonly point: FieldRef<"Activity", 'Int'>
    readonly is_active: FieldRef<"Activity", 'Boolean'>
    readonly created_at: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity.checkinDetails
   */
  export type Activity$checkinDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinDetail
     */
    select?: CheckinDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinDetail
     */
    omit?: CheckinDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinDetailInclude<ExtArgs> | null
    where?: CheckinDetailWhereInput
    orderBy?: CheckinDetailOrderByWithRelationInput | CheckinDetailOrderByWithRelationInput[]
    cursor?: CheckinDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinDetailScalarFieldEnum | CheckinDetailScalarFieldEnum[]
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model Checkin
   */

  export type AggregateCheckin = {
    _count: CheckinCountAggregateOutputType | null
    _avg: CheckinAvgAggregateOutputType | null
    _sum: CheckinSumAggregateOutputType | null
    _min: CheckinMinAggregateOutputType | null
    _max: CheckinMaxAggregateOutputType | null
  }

  export type CheckinAvgAggregateOutputType = {
    total_point: number | null
  }

  export type CheckinSumAggregateOutputType = {
    total_point: number | null
  }

  export type CheckinMinAggregateOutputType = {
    id: string | null
    student_id: string | null
    checked_by: string | null
    checkin_date: Date | null
    total_point: number | null
    created_at: Date | null
  }

  export type CheckinMaxAggregateOutputType = {
    id: string | null
    student_id: string | null
    checked_by: string | null
    checkin_date: Date | null
    total_point: number | null
    created_at: Date | null
  }

  export type CheckinCountAggregateOutputType = {
    id: number
    student_id: number
    checked_by: number
    checkin_date: number
    total_point: number
    created_at: number
    _all: number
  }


  export type CheckinAvgAggregateInputType = {
    total_point?: true
  }

  export type CheckinSumAggregateInputType = {
    total_point?: true
  }

  export type CheckinMinAggregateInputType = {
    id?: true
    student_id?: true
    checked_by?: true
    checkin_date?: true
    total_point?: true
    created_at?: true
  }

  export type CheckinMaxAggregateInputType = {
    id?: true
    student_id?: true
    checked_by?: true
    checkin_date?: true
    total_point?: true
    created_at?: true
  }

  export type CheckinCountAggregateInputType = {
    id?: true
    student_id?: true
    checked_by?: true
    checkin_date?: true
    total_point?: true
    created_at?: true
    _all?: true
  }

  export type CheckinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkin to aggregate.
     */
    where?: CheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checkins
    **/
    _count?: true | CheckinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckinMaxAggregateInputType
  }

  export type GetCheckinAggregateType<T extends CheckinAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckin[P]>
      : GetScalarType<T[P], AggregateCheckin[P]>
  }




  export type CheckinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinWhereInput
    orderBy?: CheckinOrderByWithAggregationInput | CheckinOrderByWithAggregationInput[]
    by: CheckinScalarFieldEnum[] | CheckinScalarFieldEnum
    having?: CheckinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckinCountAggregateInputType | true
    _avg?: CheckinAvgAggregateInputType
    _sum?: CheckinSumAggregateInputType
    _min?: CheckinMinAggregateInputType
    _max?: CheckinMaxAggregateInputType
  }

  export type CheckinGroupByOutputType = {
    id: string
    student_id: string
    checked_by: string
    checkin_date: Date
    total_point: number
    created_at: Date
    _count: CheckinCountAggregateOutputType | null
    _avg: CheckinAvgAggregateOutputType | null
    _sum: CheckinSumAggregateOutputType | null
    _min: CheckinMinAggregateOutputType | null
    _max: CheckinMaxAggregateOutputType | null
  }

  type GetCheckinGroupByPayload<T extends CheckinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckinGroupByOutputType[P]>
            : GetScalarType<T[P], CheckinGroupByOutputType[P]>
        }
      >
    >


  export type CheckinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    checked_by?: boolean
    checkin_date?: boolean
    total_point?: boolean
    created_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    details?: boolean | Checkin$detailsArgs<ExtArgs>
    _count?: boolean | CheckinCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkin"]>

  export type CheckinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    checked_by?: boolean
    checkin_date?: boolean
    total_point?: boolean
    created_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkin"]>

  export type CheckinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    checked_by?: boolean
    checkin_date?: boolean
    total_point?: boolean
    created_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkin"]>

  export type CheckinSelectScalar = {
    id?: boolean
    student_id?: boolean
    checked_by?: boolean
    checkin_date?: boolean
    total_point?: boolean
    created_at?: boolean
  }

  export type CheckinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "checked_by" | "checkin_date" | "total_point" | "created_at", ExtArgs["result"]["checkin"]>
  export type CheckinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    details?: boolean | Checkin$detailsArgs<ExtArgs>
    _count?: boolean | CheckinCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CheckinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CheckinIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CheckinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Checkin"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      details: Prisma.$CheckinDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      student_id: string
      checked_by: string
      checkin_date: Date
      total_point: number
      created_at: Date
    }, ExtArgs["result"]["checkin"]>
    composites: {}
  }

  type CheckinGetPayload<S extends boolean | null | undefined | CheckinDefaultArgs> = $Result.GetResult<Prisma.$CheckinPayload, S>

  type CheckinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckinCountAggregateInputType | true
    }

  export interface CheckinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Checkin'], meta: { name: 'Checkin' } }
    /**
     * Find zero or one Checkin that matches the filter.
     * @param {CheckinFindUniqueArgs} args - Arguments to find a Checkin
     * @example
     * // Get one Checkin
     * const checkin = await prisma.checkin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckinFindUniqueArgs>(args: SelectSubset<T, CheckinFindUniqueArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Checkin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckinFindUniqueOrThrowArgs} args - Arguments to find a Checkin
     * @example
     * // Get one Checkin
     * const checkin = await prisma.checkin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckinFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checkin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinFindFirstArgs} args - Arguments to find a Checkin
     * @example
     * // Get one Checkin
     * const checkin = await prisma.checkin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckinFindFirstArgs>(args?: SelectSubset<T, CheckinFindFirstArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checkin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinFindFirstOrThrowArgs} args - Arguments to find a Checkin
     * @example
     * // Get one Checkin
     * const checkin = await prisma.checkin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckinFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckinFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checkins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checkins
     * const checkins = await prisma.checkin.findMany()
     * 
     * // Get first 10 Checkins
     * const checkins = await prisma.checkin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkinWithIdOnly = await prisma.checkin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckinFindManyArgs>(args?: SelectSubset<T, CheckinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Checkin.
     * @param {CheckinCreateArgs} args - Arguments to create a Checkin.
     * @example
     * // Create one Checkin
     * const Checkin = await prisma.checkin.create({
     *   data: {
     *     // ... data to create a Checkin
     *   }
     * })
     * 
     */
    create<T extends CheckinCreateArgs>(args: SelectSubset<T, CheckinCreateArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Checkins.
     * @param {CheckinCreateManyArgs} args - Arguments to create many Checkins.
     * @example
     * // Create many Checkins
     * const checkin = await prisma.checkin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckinCreateManyArgs>(args?: SelectSubset<T, CheckinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Checkins and returns the data saved in the database.
     * @param {CheckinCreateManyAndReturnArgs} args - Arguments to create many Checkins.
     * @example
     * // Create many Checkins
     * const checkin = await prisma.checkin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Checkins and only return the `id`
     * const checkinWithIdOnly = await prisma.checkin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckinCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Checkin.
     * @param {CheckinDeleteArgs} args - Arguments to delete one Checkin.
     * @example
     * // Delete one Checkin
     * const Checkin = await prisma.checkin.delete({
     *   where: {
     *     // ... filter to delete one Checkin
     *   }
     * })
     * 
     */
    delete<T extends CheckinDeleteArgs>(args: SelectSubset<T, CheckinDeleteArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Checkin.
     * @param {CheckinUpdateArgs} args - Arguments to update one Checkin.
     * @example
     * // Update one Checkin
     * const checkin = await prisma.checkin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckinUpdateArgs>(args: SelectSubset<T, CheckinUpdateArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Checkins.
     * @param {CheckinDeleteManyArgs} args - Arguments to filter Checkins to delete.
     * @example
     * // Delete a few Checkins
     * const { count } = await prisma.checkin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckinDeleteManyArgs>(args?: SelectSubset<T, CheckinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checkins
     * const checkin = await prisma.checkin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckinUpdateManyArgs>(args: SelectSubset<T, CheckinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkins and returns the data updated in the database.
     * @param {CheckinUpdateManyAndReturnArgs} args - Arguments to update many Checkins.
     * @example
     * // Update many Checkins
     * const checkin = await prisma.checkin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Checkins and only return the `id`
     * const checkinWithIdOnly = await prisma.checkin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CheckinUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Checkin.
     * @param {CheckinUpsertArgs} args - Arguments to update or create a Checkin.
     * @example
     * // Update or create a Checkin
     * const checkin = await prisma.checkin.upsert({
     *   create: {
     *     // ... data to create a Checkin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checkin we want to update
     *   }
     * })
     */
    upsert<T extends CheckinUpsertArgs>(args: SelectSubset<T, CheckinUpsertArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Checkins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinCountArgs} args - Arguments to filter Checkins to count.
     * @example
     * // Count the number of Checkins
     * const count = await prisma.checkin.count({
     *   where: {
     *     // ... the filter for the Checkins we want to count
     *   }
     * })
    **/
    count<T extends CheckinCountArgs>(
      args?: Subset<T, CheckinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checkin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CheckinAggregateArgs>(args: Subset<T, CheckinAggregateArgs>): Prisma.PrismaPromise<GetCheckinAggregateType<T>>

    /**
     * Group by Checkin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CheckinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckinGroupByArgs['orderBy'] }
        : { orderBy?: CheckinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CheckinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Checkin model
   */
  readonly fields: CheckinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Checkin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    details<T extends Checkin$detailsArgs<ExtArgs> = {}>(args?: Subset<T, Checkin$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Checkin model
   */
  interface CheckinFieldRefs {
    readonly id: FieldRef<"Checkin", 'String'>
    readonly student_id: FieldRef<"Checkin", 'String'>
    readonly checked_by: FieldRef<"Checkin", 'String'>
    readonly checkin_date: FieldRef<"Checkin", 'DateTime'>
    readonly total_point: FieldRef<"Checkin", 'Int'>
    readonly created_at: FieldRef<"Checkin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Checkin findUnique
   */
  export type CheckinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkin
     */
    omit?: CheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkin to fetch.
     */
    where: CheckinWhereUniqueInput
  }

  /**
   * Checkin findUniqueOrThrow
   */
  export type CheckinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkin
     */
    omit?: CheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkin to fetch.
     */
    where: CheckinWhereUniqueInput
  }

  /**
   * Checkin findFirst
   */
  export type CheckinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkin
     */
    omit?: CheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkin to fetch.
     */
    where?: CheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkins.
     */
    cursor?: CheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkins.
     */
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * Checkin findFirstOrThrow
   */
  export type CheckinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkin
     */
    omit?: CheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkin to fetch.
     */
    where?: CheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkins.
     */
    cursor?: CheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkins.
     */
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * Checkin findMany
   */
  export type CheckinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkin
     */
    omit?: CheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkins to fetch.
     */
    where?: CheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checkins.
     */
    cursor?: CheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * Checkin create
   */
  export type CheckinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkin
     */
    omit?: CheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * The data needed to create a Checkin.
     */
    data: XOR<CheckinCreateInput, CheckinUncheckedCreateInput>
  }

  /**
   * Checkin createMany
   */
  export type CheckinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Checkins.
     */
    data: CheckinCreateManyInput | CheckinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Checkin createManyAndReturn
   */
  export type CheckinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Checkin
     */
    omit?: CheckinOmit<ExtArgs> | null
    /**
     * The data used to create many Checkins.
     */
    data: CheckinCreateManyInput | CheckinCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Checkin update
   */
  export type CheckinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkin
     */
    omit?: CheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * The data needed to update a Checkin.
     */
    data: XOR<CheckinUpdateInput, CheckinUncheckedUpdateInput>
    /**
     * Choose, which Checkin to update.
     */
    where: CheckinWhereUniqueInput
  }

  /**
   * Checkin updateMany
   */
  export type CheckinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Checkins.
     */
    data: XOR<CheckinUpdateManyMutationInput, CheckinUncheckedUpdateManyInput>
    /**
     * Filter which Checkins to update
     */
    where?: CheckinWhereInput
    /**
     * Limit how many Checkins to update.
     */
    limit?: number
  }

  /**
   * Checkin updateManyAndReturn
   */
  export type CheckinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Checkin
     */
    omit?: CheckinOmit<ExtArgs> | null
    /**
     * The data used to update Checkins.
     */
    data: XOR<CheckinUpdateManyMutationInput, CheckinUncheckedUpdateManyInput>
    /**
     * Filter which Checkins to update
     */
    where?: CheckinWhereInput
    /**
     * Limit how many Checkins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Checkin upsert
   */
  export type CheckinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkin
     */
    omit?: CheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * The filter to search for the Checkin to update in case it exists.
     */
    where: CheckinWhereUniqueInput
    /**
     * In case the Checkin found by the `where` argument doesn't exist, create a new Checkin with this data.
     */
    create: XOR<CheckinCreateInput, CheckinUncheckedCreateInput>
    /**
     * In case the Checkin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckinUpdateInput, CheckinUncheckedUpdateInput>
  }

  /**
   * Checkin delete
   */
  export type CheckinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkin
     */
    omit?: CheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter which Checkin to delete.
     */
    where: CheckinWhereUniqueInput
  }

  /**
   * Checkin deleteMany
   */
  export type CheckinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkins to delete
     */
    where?: CheckinWhereInput
    /**
     * Limit how many Checkins to delete.
     */
    limit?: number
  }

  /**
   * Checkin.details
   */
  export type Checkin$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinDetail
     */
    select?: CheckinDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinDetail
     */
    omit?: CheckinDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinDetailInclude<ExtArgs> | null
    where?: CheckinDetailWhereInput
    orderBy?: CheckinDetailOrderByWithRelationInput | CheckinDetailOrderByWithRelationInput[]
    cursor?: CheckinDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinDetailScalarFieldEnum | CheckinDetailScalarFieldEnum[]
  }

  /**
   * Checkin without action
   */
  export type CheckinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkin
     */
    omit?: CheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
  }


  /**
   * Model CheckinDetail
   */

  export type AggregateCheckinDetail = {
    _count: CheckinDetailCountAggregateOutputType | null
    _avg: CheckinDetailAvgAggregateOutputType | null
    _sum: CheckinDetailSumAggregateOutputType | null
    _min: CheckinDetailMinAggregateOutputType | null
    _max: CheckinDetailMaxAggregateOutputType | null
  }

  export type CheckinDetailAvgAggregateOutputType = {
    point: number | null
  }

  export type CheckinDetailSumAggregateOutputType = {
    point: number | null
  }

  export type CheckinDetailMinAggregateOutputType = {
    id: string | null
    checkin_id: string | null
    activity_id: string | null
    point: number | null
  }

  export type CheckinDetailMaxAggregateOutputType = {
    id: string | null
    checkin_id: string | null
    activity_id: string | null
    point: number | null
  }

  export type CheckinDetailCountAggregateOutputType = {
    id: number
    checkin_id: number
    activity_id: number
    point: number
    _all: number
  }


  export type CheckinDetailAvgAggregateInputType = {
    point?: true
  }

  export type CheckinDetailSumAggregateInputType = {
    point?: true
  }

  export type CheckinDetailMinAggregateInputType = {
    id?: true
    checkin_id?: true
    activity_id?: true
    point?: true
  }

  export type CheckinDetailMaxAggregateInputType = {
    id?: true
    checkin_id?: true
    activity_id?: true
    point?: true
  }

  export type CheckinDetailCountAggregateInputType = {
    id?: true
    checkin_id?: true
    activity_id?: true
    point?: true
    _all?: true
  }

  export type CheckinDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckinDetail to aggregate.
     */
    where?: CheckinDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckinDetails to fetch.
     */
    orderBy?: CheckinDetailOrderByWithRelationInput | CheckinDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckinDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckinDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckinDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckinDetails
    **/
    _count?: true | CheckinDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckinDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckinDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckinDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckinDetailMaxAggregateInputType
  }

  export type GetCheckinDetailAggregateType<T extends CheckinDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckinDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckinDetail[P]>
      : GetScalarType<T[P], AggregateCheckinDetail[P]>
  }




  export type CheckinDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinDetailWhereInput
    orderBy?: CheckinDetailOrderByWithAggregationInput | CheckinDetailOrderByWithAggregationInput[]
    by: CheckinDetailScalarFieldEnum[] | CheckinDetailScalarFieldEnum
    having?: CheckinDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckinDetailCountAggregateInputType | true
    _avg?: CheckinDetailAvgAggregateInputType
    _sum?: CheckinDetailSumAggregateInputType
    _min?: CheckinDetailMinAggregateInputType
    _max?: CheckinDetailMaxAggregateInputType
  }

  export type CheckinDetailGroupByOutputType = {
    id: string
    checkin_id: string
    activity_id: string
    point: number
    _count: CheckinDetailCountAggregateOutputType | null
    _avg: CheckinDetailAvgAggregateOutputType | null
    _sum: CheckinDetailSumAggregateOutputType | null
    _min: CheckinDetailMinAggregateOutputType | null
    _max: CheckinDetailMaxAggregateOutputType | null
  }

  type GetCheckinDetailGroupByPayload<T extends CheckinDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckinDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckinDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckinDetailGroupByOutputType[P]>
            : GetScalarType<T[P], CheckinDetailGroupByOutputType[P]>
        }
      >
    >


  export type CheckinDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkin_id?: boolean
    activity_id?: boolean
    point?: boolean
    checkin?: boolean | CheckinDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkinDetail"]>

  export type CheckinDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkin_id?: boolean
    activity_id?: boolean
    point?: boolean
    checkin?: boolean | CheckinDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkinDetail"]>

  export type CheckinDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkin_id?: boolean
    activity_id?: boolean
    point?: boolean
    checkin?: boolean | CheckinDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkinDetail"]>

  export type CheckinDetailSelectScalar = {
    id?: boolean
    checkin_id?: boolean
    activity_id?: boolean
    point?: boolean
  }

  export type CheckinDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "checkin_id" | "activity_id" | "point", ExtArgs["result"]["checkinDetail"]>
  export type CheckinDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkin?: boolean | CheckinDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }
  export type CheckinDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkin?: boolean | CheckinDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }
  export type CheckinDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkin?: boolean | CheckinDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }

  export type $CheckinDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckinDetail"
    objects: {
      checkin: Prisma.$CheckinPayload<ExtArgs>
      activity: Prisma.$ActivityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      checkin_id: string
      activity_id: string
      point: number
    }, ExtArgs["result"]["checkinDetail"]>
    composites: {}
  }

  type CheckinDetailGetPayload<S extends boolean | null | undefined | CheckinDetailDefaultArgs> = $Result.GetResult<Prisma.$CheckinDetailPayload, S>

  type CheckinDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckinDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckinDetailCountAggregateInputType | true
    }

  export interface CheckinDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckinDetail'], meta: { name: 'CheckinDetail' } }
    /**
     * Find zero or one CheckinDetail that matches the filter.
     * @param {CheckinDetailFindUniqueArgs} args - Arguments to find a CheckinDetail
     * @example
     * // Get one CheckinDetail
     * const checkinDetail = await prisma.checkinDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckinDetailFindUniqueArgs>(args: SelectSubset<T, CheckinDetailFindUniqueArgs<ExtArgs>>): Prisma__CheckinDetailClient<$Result.GetResult<Prisma.$CheckinDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CheckinDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckinDetailFindUniqueOrThrowArgs} args - Arguments to find a CheckinDetail
     * @example
     * // Get one CheckinDetail
     * const checkinDetail = await prisma.checkinDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckinDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckinDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckinDetailClient<$Result.GetResult<Prisma.$CheckinDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckinDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinDetailFindFirstArgs} args - Arguments to find a CheckinDetail
     * @example
     * // Get one CheckinDetail
     * const checkinDetail = await prisma.checkinDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckinDetailFindFirstArgs>(args?: SelectSubset<T, CheckinDetailFindFirstArgs<ExtArgs>>): Prisma__CheckinDetailClient<$Result.GetResult<Prisma.$CheckinDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckinDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinDetailFindFirstOrThrowArgs} args - Arguments to find a CheckinDetail
     * @example
     * // Get one CheckinDetail
     * const checkinDetail = await prisma.checkinDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckinDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckinDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckinDetailClient<$Result.GetResult<Prisma.$CheckinDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CheckinDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckinDetails
     * const checkinDetails = await prisma.checkinDetail.findMany()
     * 
     * // Get first 10 CheckinDetails
     * const checkinDetails = await prisma.checkinDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkinDetailWithIdOnly = await prisma.checkinDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckinDetailFindManyArgs>(args?: SelectSubset<T, CheckinDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CheckinDetail.
     * @param {CheckinDetailCreateArgs} args - Arguments to create a CheckinDetail.
     * @example
     * // Create one CheckinDetail
     * const CheckinDetail = await prisma.checkinDetail.create({
     *   data: {
     *     // ... data to create a CheckinDetail
     *   }
     * })
     * 
     */
    create<T extends CheckinDetailCreateArgs>(args: SelectSubset<T, CheckinDetailCreateArgs<ExtArgs>>): Prisma__CheckinDetailClient<$Result.GetResult<Prisma.$CheckinDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CheckinDetails.
     * @param {CheckinDetailCreateManyArgs} args - Arguments to create many CheckinDetails.
     * @example
     * // Create many CheckinDetails
     * const checkinDetail = await prisma.checkinDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckinDetailCreateManyArgs>(args?: SelectSubset<T, CheckinDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CheckinDetails and returns the data saved in the database.
     * @param {CheckinDetailCreateManyAndReturnArgs} args - Arguments to create many CheckinDetails.
     * @example
     * // Create many CheckinDetails
     * const checkinDetail = await prisma.checkinDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CheckinDetails and only return the `id`
     * const checkinDetailWithIdOnly = await prisma.checkinDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckinDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckinDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CheckinDetail.
     * @param {CheckinDetailDeleteArgs} args - Arguments to delete one CheckinDetail.
     * @example
     * // Delete one CheckinDetail
     * const CheckinDetail = await prisma.checkinDetail.delete({
     *   where: {
     *     // ... filter to delete one CheckinDetail
     *   }
     * })
     * 
     */
    delete<T extends CheckinDetailDeleteArgs>(args: SelectSubset<T, CheckinDetailDeleteArgs<ExtArgs>>): Prisma__CheckinDetailClient<$Result.GetResult<Prisma.$CheckinDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CheckinDetail.
     * @param {CheckinDetailUpdateArgs} args - Arguments to update one CheckinDetail.
     * @example
     * // Update one CheckinDetail
     * const checkinDetail = await prisma.checkinDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckinDetailUpdateArgs>(args: SelectSubset<T, CheckinDetailUpdateArgs<ExtArgs>>): Prisma__CheckinDetailClient<$Result.GetResult<Prisma.$CheckinDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CheckinDetails.
     * @param {CheckinDetailDeleteManyArgs} args - Arguments to filter CheckinDetails to delete.
     * @example
     * // Delete a few CheckinDetails
     * const { count } = await prisma.checkinDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckinDetailDeleteManyArgs>(args?: SelectSubset<T, CheckinDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckinDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckinDetails
     * const checkinDetail = await prisma.checkinDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckinDetailUpdateManyArgs>(args: SelectSubset<T, CheckinDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckinDetails and returns the data updated in the database.
     * @param {CheckinDetailUpdateManyAndReturnArgs} args - Arguments to update many CheckinDetails.
     * @example
     * // Update many CheckinDetails
     * const checkinDetail = await prisma.checkinDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CheckinDetails and only return the `id`
     * const checkinDetailWithIdOnly = await prisma.checkinDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CheckinDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckinDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CheckinDetail.
     * @param {CheckinDetailUpsertArgs} args - Arguments to update or create a CheckinDetail.
     * @example
     * // Update or create a CheckinDetail
     * const checkinDetail = await prisma.checkinDetail.upsert({
     *   create: {
     *     // ... data to create a CheckinDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckinDetail we want to update
     *   }
     * })
     */
    upsert<T extends CheckinDetailUpsertArgs>(args: SelectSubset<T, CheckinDetailUpsertArgs<ExtArgs>>): Prisma__CheckinDetailClient<$Result.GetResult<Prisma.$CheckinDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CheckinDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinDetailCountArgs} args - Arguments to filter CheckinDetails to count.
     * @example
     * // Count the number of CheckinDetails
     * const count = await prisma.checkinDetail.count({
     *   where: {
     *     // ... the filter for the CheckinDetails we want to count
     *   }
     * })
    **/
    count<T extends CheckinDetailCountArgs>(
      args?: Subset<T, CheckinDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckinDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckinDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CheckinDetailAggregateArgs>(args: Subset<T, CheckinDetailAggregateArgs>): Prisma.PrismaPromise<GetCheckinDetailAggregateType<T>>

    /**
     * Group by CheckinDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CheckinDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckinDetailGroupByArgs['orderBy'] }
        : { orderBy?: CheckinDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CheckinDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckinDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckinDetail model
   */
  readonly fields: CheckinDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckinDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckinDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checkin<T extends CheckinDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CheckinDefaultArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activity<T extends ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityDefaultArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CheckinDetail model
   */
  interface CheckinDetailFieldRefs {
    readonly id: FieldRef<"CheckinDetail", 'String'>
    readonly checkin_id: FieldRef<"CheckinDetail", 'String'>
    readonly activity_id: FieldRef<"CheckinDetail", 'String'>
    readonly point: FieldRef<"CheckinDetail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CheckinDetail findUnique
   */
  export type CheckinDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinDetail
     */
    select?: CheckinDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinDetail
     */
    omit?: CheckinDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinDetailInclude<ExtArgs> | null
    /**
     * Filter, which CheckinDetail to fetch.
     */
    where: CheckinDetailWhereUniqueInput
  }

  /**
   * CheckinDetail findUniqueOrThrow
   */
  export type CheckinDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinDetail
     */
    select?: CheckinDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinDetail
     */
    omit?: CheckinDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinDetailInclude<ExtArgs> | null
    /**
     * Filter, which CheckinDetail to fetch.
     */
    where: CheckinDetailWhereUniqueInput
  }

  /**
   * CheckinDetail findFirst
   */
  export type CheckinDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinDetail
     */
    select?: CheckinDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinDetail
     */
    omit?: CheckinDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinDetailInclude<ExtArgs> | null
    /**
     * Filter, which CheckinDetail to fetch.
     */
    where?: CheckinDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckinDetails to fetch.
     */
    orderBy?: CheckinDetailOrderByWithRelationInput | CheckinDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckinDetails.
     */
    cursor?: CheckinDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckinDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckinDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckinDetails.
     */
    distinct?: CheckinDetailScalarFieldEnum | CheckinDetailScalarFieldEnum[]
  }

  /**
   * CheckinDetail findFirstOrThrow
   */
  export type CheckinDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinDetail
     */
    select?: CheckinDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinDetail
     */
    omit?: CheckinDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinDetailInclude<ExtArgs> | null
    /**
     * Filter, which CheckinDetail to fetch.
     */
    where?: CheckinDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckinDetails to fetch.
     */
    orderBy?: CheckinDetailOrderByWithRelationInput | CheckinDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckinDetails.
     */
    cursor?: CheckinDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckinDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckinDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckinDetails.
     */
    distinct?: CheckinDetailScalarFieldEnum | CheckinDetailScalarFieldEnum[]
  }

  /**
   * CheckinDetail findMany
   */
  export type CheckinDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinDetail
     */
    select?: CheckinDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinDetail
     */
    omit?: CheckinDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinDetailInclude<ExtArgs> | null
    /**
     * Filter, which CheckinDetails to fetch.
     */
    where?: CheckinDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckinDetails to fetch.
     */
    orderBy?: CheckinDetailOrderByWithRelationInput | CheckinDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckinDetails.
     */
    cursor?: CheckinDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckinDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckinDetails.
     */
    skip?: number
    distinct?: CheckinDetailScalarFieldEnum | CheckinDetailScalarFieldEnum[]
  }

  /**
   * CheckinDetail create
   */
  export type CheckinDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinDetail
     */
    select?: CheckinDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinDetail
     */
    omit?: CheckinDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a CheckinDetail.
     */
    data: XOR<CheckinDetailCreateInput, CheckinDetailUncheckedCreateInput>
  }

  /**
   * CheckinDetail createMany
   */
  export type CheckinDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckinDetails.
     */
    data: CheckinDetailCreateManyInput | CheckinDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CheckinDetail createManyAndReturn
   */
  export type CheckinDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinDetail
     */
    select?: CheckinDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinDetail
     */
    omit?: CheckinDetailOmit<ExtArgs> | null
    /**
     * The data used to create many CheckinDetails.
     */
    data: CheckinDetailCreateManyInput | CheckinDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckinDetail update
   */
  export type CheckinDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinDetail
     */
    select?: CheckinDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinDetail
     */
    omit?: CheckinDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a CheckinDetail.
     */
    data: XOR<CheckinDetailUpdateInput, CheckinDetailUncheckedUpdateInput>
    /**
     * Choose, which CheckinDetail to update.
     */
    where: CheckinDetailWhereUniqueInput
  }

  /**
   * CheckinDetail updateMany
   */
  export type CheckinDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckinDetails.
     */
    data: XOR<CheckinDetailUpdateManyMutationInput, CheckinDetailUncheckedUpdateManyInput>
    /**
     * Filter which CheckinDetails to update
     */
    where?: CheckinDetailWhereInput
    /**
     * Limit how many CheckinDetails to update.
     */
    limit?: number
  }

  /**
   * CheckinDetail updateManyAndReturn
   */
  export type CheckinDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinDetail
     */
    select?: CheckinDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinDetail
     */
    omit?: CheckinDetailOmit<ExtArgs> | null
    /**
     * The data used to update CheckinDetails.
     */
    data: XOR<CheckinDetailUpdateManyMutationInput, CheckinDetailUncheckedUpdateManyInput>
    /**
     * Filter which CheckinDetails to update
     */
    where?: CheckinDetailWhereInput
    /**
     * Limit how many CheckinDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckinDetail upsert
   */
  export type CheckinDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinDetail
     */
    select?: CheckinDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinDetail
     */
    omit?: CheckinDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the CheckinDetail to update in case it exists.
     */
    where: CheckinDetailWhereUniqueInput
    /**
     * In case the CheckinDetail found by the `where` argument doesn't exist, create a new CheckinDetail with this data.
     */
    create: XOR<CheckinDetailCreateInput, CheckinDetailUncheckedCreateInput>
    /**
     * In case the CheckinDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckinDetailUpdateInput, CheckinDetailUncheckedUpdateInput>
  }

  /**
   * CheckinDetail delete
   */
  export type CheckinDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinDetail
     */
    select?: CheckinDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinDetail
     */
    omit?: CheckinDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinDetailInclude<ExtArgs> | null
    /**
     * Filter which CheckinDetail to delete.
     */
    where: CheckinDetailWhereUniqueInput
  }

  /**
   * CheckinDetail deleteMany
   */
  export type CheckinDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckinDetails to delete
     */
    where?: CheckinDetailWhereInput
    /**
     * Limit how many CheckinDetails to delete.
     */
    limit?: number
  }

  /**
   * CheckinDetail without action
   */
  export type CheckinDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckinDetail
     */
    select?: CheckinDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckinDetail
     */
    omit?: CheckinDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinDetailInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    role: 'role',
    class_name: 'class_name',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    phone: 'phone',
    class_name: 'class_name',
    nganh: 'nganh',
    qr_code: 'qr_code',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    point: 'point',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const CheckinScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    checked_by: 'checked_by',
    checkin_date: 'checkin_date',
    total_point: 'total_point',
    created_at: 'created_at'
  };

  export type CheckinScalarFieldEnum = (typeof CheckinScalarFieldEnum)[keyof typeof CheckinScalarFieldEnum]


  export const CheckinDetailScalarFieldEnum: {
    id: 'id',
    checkin_id: 'checkin_id',
    activity_id: 'activity_id',
    point: 'point'
  };

  export type CheckinDetailScalarFieldEnum = (typeof CheckinDetailScalarFieldEnum)[keyof typeof CheckinDetailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    full_name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    class_name?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    checkins?: CheckinListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    class_name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    checkins?: CheckinOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    full_name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    class_name?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    checkins?: CheckinListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    class_name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    full_name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    class_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: UuidFilter<"Student"> | string
    full_name?: StringFilter<"Student"> | string
    phone?: StringNullableFilter<"Student"> | string | null
    class_name?: StringFilter<"Student"> | string
    nganh?: StringFilter<"Student"> | string
    qr_code?: UuidNullableFilter<"Student"> | string | null
    is_active?: BoolFilter<"Student"> | boolean
    created_at?: DateTimeFilter<"Student"> | Date | string
    checkins?: CheckinListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrderInput | SortOrder
    class_name?: SortOrder
    nganh?: SortOrder
    qr_code?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    checkins?: CheckinOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    qr_code?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    full_name?: StringFilter<"Student"> | string
    phone?: StringNullableFilter<"Student"> | string | null
    class_name?: StringFilter<"Student"> | string
    nganh?: StringFilter<"Student"> | string
    is_active?: BoolFilter<"Student"> | boolean
    created_at?: DateTimeFilter<"Student"> | Date | string
    checkins?: CheckinListRelationFilter
  }, "id" | "qr_code">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrderInput | SortOrder
    class_name?: SortOrder
    nganh?: SortOrder
    qr_code?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Student"> | string
    full_name?: StringWithAggregatesFilter<"Student"> | string
    phone?: StringNullableWithAggregatesFilter<"Student"> | string | null
    class_name?: StringWithAggregatesFilter<"Student"> | string
    nganh?: StringWithAggregatesFilter<"Student"> | string
    qr_code?: UuidNullableWithAggregatesFilter<"Student"> | string | null
    is_active?: BoolWithAggregatesFilter<"Student"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: UuidFilter<"Activity"> | string
    name?: StringFilter<"Activity"> | string
    point?: IntFilter<"Activity"> | number
    is_active?: BoolFilter<"Activity"> | boolean
    created_at?: DateTimeFilter<"Activity"> | Date | string
    checkinDetails?: CheckinDetailListRelationFilter
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    point?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    checkinDetails?: CheckinDetailOrderByRelationAggregateInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    name?: StringFilter<"Activity"> | string
    point?: IntFilter<"Activity"> | number
    is_active?: BoolFilter<"Activity"> | boolean
    created_at?: DateTimeFilter<"Activity"> | Date | string
    checkinDetails?: CheckinDetailListRelationFilter
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    point?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Activity"> | string
    name?: StringWithAggregatesFilter<"Activity"> | string
    point?: IntWithAggregatesFilter<"Activity"> | number
    is_active?: BoolWithAggregatesFilter<"Activity"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
  }

  export type CheckinWhereInput = {
    AND?: CheckinWhereInput | CheckinWhereInput[]
    OR?: CheckinWhereInput[]
    NOT?: CheckinWhereInput | CheckinWhereInput[]
    id?: UuidFilter<"Checkin"> | string
    student_id?: UuidFilter<"Checkin"> | string
    checked_by?: UuidFilter<"Checkin"> | string
    checkin_date?: DateTimeFilter<"Checkin"> | Date | string
    total_point?: IntFilter<"Checkin"> | number
    created_at?: DateTimeFilter<"Checkin"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    details?: CheckinDetailListRelationFilter
  }

  export type CheckinOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    checked_by?: SortOrder
    checkin_date?: SortOrder
    total_point?: SortOrder
    created_at?: SortOrder
    student?: StudentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    details?: CheckinDetailOrderByRelationAggregateInput
  }

  export type CheckinWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    student_id_checkin_date?: CheckinStudent_idCheckin_dateCompoundUniqueInput
    AND?: CheckinWhereInput | CheckinWhereInput[]
    OR?: CheckinWhereInput[]
    NOT?: CheckinWhereInput | CheckinWhereInput[]
    student_id?: UuidFilter<"Checkin"> | string
    checked_by?: UuidFilter<"Checkin"> | string
    checkin_date?: DateTimeFilter<"Checkin"> | Date | string
    total_point?: IntFilter<"Checkin"> | number
    created_at?: DateTimeFilter<"Checkin"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    details?: CheckinDetailListRelationFilter
  }, "id" | "student_id_checkin_date">

  export type CheckinOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    checked_by?: SortOrder
    checkin_date?: SortOrder
    total_point?: SortOrder
    created_at?: SortOrder
    _count?: CheckinCountOrderByAggregateInput
    _avg?: CheckinAvgOrderByAggregateInput
    _max?: CheckinMaxOrderByAggregateInput
    _min?: CheckinMinOrderByAggregateInput
    _sum?: CheckinSumOrderByAggregateInput
  }

  export type CheckinScalarWhereWithAggregatesInput = {
    AND?: CheckinScalarWhereWithAggregatesInput | CheckinScalarWhereWithAggregatesInput[]
    OR?: CheckinScalarWhereWithAggregatesInput[]
    NOT?: CheckinScalarWhereWithAggregatesInput | CheckinScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Checkin"> | string
    student_id?: UuidWithAggregatesFilter<"Checkin"> | string
    checked_by?: UuidWithAggregatesFilter<"Checkin"> | string
    checkin_date?: DateTimeWithAggregatesFilter<"Checkin"> | Date | string
    total_point?: IntWithAggregatesFilter<"Checkin"> | number
    created_at?: DateTimeWithAggregatesFilter<"Checkin"> | Date | string
  }

  export type CheckinDetailWhereInput = {
    AND?: CheckinDetailWhereInput | CheckinDetailWhereInput[]
    OR?: CheckinDetailWhereInput[]
    NOT?: CheckinDetailWhereInput | CheckinDetailWhereInput[]
    id?: UuidFilter<"CheckinDetail"> | string
    checkin_id?: UuidFilter<"CheckinDetail"> | string
    activity_id?: UuidFilter<"CheckinDetail"> | string
    point?: IntFilter<"CheckinDetail"> | number
    checkin?: XOR<CheckinScalarRelationFilter, CheckinWhereInput>
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
  }

  export type CheckinDetailOrderByWithRelationInput = {
    id?: SortOrder
    checkin_id?: SortOrder
    activity_id?: SortOrder
    point?: SortOrder
    checkin?: CheckinOrderByWithRelationInput
    activity?: ActivityOrderByWithRelationInput
  }

  export type CheckinDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CheckinDetailWhereInput | CheckinDetailWhereInput[]
    OR?: CheckinDetailWhereInput[]
    NOT?: CheckinDetailWhereInput | CheckinDetailWhereInput[]
    checkin_id?: UuidFilter<"CheckinDetail"> | string
    activity_id?: UuidFilter<"CheckinDetail"> | string
    point?: IntFilter<"CheckinDetail"> | number
    checkin?: XOR<CheckinScalarRelationFilter, CheckinWhereInput>
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
  }, "id">

  export type CheckinDetailOrderByWithAggregationInput = {
    id?: SortOrder
    checkin_id?: SortOrder
    activity_id?: SortOrder
    point?: SortOrder
    _count?: CheckinDetailCountOrderByAggregateInput
    _avg?: CheckinDetailAvgOrderByAggregateInput
    _max?: CheckinDetailMaxOrderByAggregateInput
    _min?: CheckinDetailMinOrderByAggregateInput
    _sum?: CheckinDetailSumOrderByAggregateInput
  }

  export type CheckinDetailScalarWhereWithAggregatesInput = {
    AND?: CheckinDetailScalarWhereWithAggregatesInput | CheckinDetailScalarWhereWithAggregatesInput[]
    OR?: CheckinDetailScalarWhereWithAggregatesInput[]
    NOT?: CheckinDetailScalarWhereWithAggregatesInput | CheckinDetailScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CheckinDetail"> | string
    checkin_id?: UuidWithAggregatesFilter<"CheckinDetail"> | string
    activity_id?: UuidWithAggregatesFilter<"CheckinDetail"> | string
    point?: IntWithAggregatesFilter<"CheckinDetail"> | number
  }

  export type UserCreateInput = {
    id: string
    full_name: string
    role?: $Enums.UserRole
    class_name?: string | null
    created_at?: Date | string
    checkins?: CheckinCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    full_name: string
    role?: $Enums.UserRole
    class_name?: string | null
    created_at?: Date | string
    checkins?: CheckinUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    class_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    class_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    full_name: string
    role?: $Enums.UserRole
    class_name?: string | null
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    class_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    class_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    full_name: string
    phone?: string | null
    class_name: string
    nganh: string
    qr_code?: string | null
    is_active?: boolean
    created_at?: Date | string
    checkins?: CheckinCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    full_name: string
    phone?: string | null
    class_name: string
    nganh: string
    qr_code?: string | null
    is_active?: boolean
    created_at?: Date | string
    checkins?: CheckinUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    class_name?: StringFieldUpdateOperationsInput | string
    nganh?: StringFieldUpdateOperationsInput | string
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    class_name?: StringFieldUpdateOperationsInput | string
    nganh?: StringFieldUpdateOperationsInput | string
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    full_name: string
    phone?: string | null
    class_name: string
    nganh: string
    qr_code?: string | null
    is_active?: boolean
    created_at?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    class_name?: StringFieldUpdateOperationsInput | string
    nganh?: StringFieldUpdateOperationsInput | string
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    class_name?: StringFieldUpdateOperationsInput | string
    nganh?: StringFieldUpdateOperationsInput | string
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    id?: string
    name: string
    point: number
    is_active?: boolean
    created_at?: Date | string
    checkinDetails?: CheckinDetailCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    name: string
    point: number
    is_active?: boolean
    created_at?: Date | string
    checkinDetails?: CheckinDetailUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkinDetails?: CheckinDetailUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkinDetails?: CheckinDetailUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityCreateManyInput = {
    id?: string
    name: string
    point: number
    is_active?: boolean
    created_at?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinCreateInput = {
    id?: string
    checkin_date: Date | string
    total_point: number
    created_at?: Date | string
    student: StudentCreateNestedOneWithoutCheckinsInput
    user: UserCreateNestedOneWithoutCheckinsInput
    details?: CheckinDetailCreateNestedManyWithoutCheckinInput
  }

  export type CheckinUncheckedCreateInput = {
    id?: string
    student_id: string
    checked_by: string
    checkin_date: Date | string
    total_point: number
    created_at?: Date | string
    details?: CheckinDetailUncheckedCreateNestedManyWithoutCheckinInput
  }

  export type CheckinUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkin_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutCheckinsNestedInput
    user?: UserUpdateOneRequiredWithoutCheckinsNestedInput
    details?: CheckinDetailUpdateManyWithoutCheckinNestedInput
  }

  export type CheckinUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    checked_by?: StringFieldUpdateOperationsInput | string
    checkin_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: CheckinDetailUncheckedUpdateManyWithoutCheckinNestedInput
  }

  export type CheckinCreateManyInput = {
    id?: string
    student_id: string
    checked_by: string
    checkin_date: Date | string
    total_point: number
    created_at?: Date | string
  }

  export type CheckinUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkin_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    checked_by?: StringFieldUpdateOperationsInput | string
    checkin_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinDetailCreateInput = {
    id?: string
    point: number
    checkin: CheckinCreateNestedOneWithoutDetailsInput
    activity: ActivityCreateNestedOneWithoutCheckinDetailsInput
  }

  export type CheckinDetailUncheckedCreateInput = {
    id?: string
    checkin_id: string
    activity_id: string
    point: number
  }

  export type CheckinDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    checkin?: CheckinUpdateOneRequiredWithoutDetailsNestedInput
    activity?: ActivityUpdateOneRequiredWithoutCheckinDetailsNestedInput
  }

  export type CheckinDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkin_id?: StringFieldUpdateOperationsInput | string
    activity_id?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
  }

  export type CheckinDetailCreateManyInput = {
    id?: string
    checkin_id: string
    activity_id: string
    point: number
  }

  export type CheckinDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
  }

  export type CheckinDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkin_id?: StringFieldUpdateOperationsInput | string
    activity_id?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CheckinListRelationFilter = {
    every?: CheckinWhereInput
    some?: CheckinWhereInput
    none?: CheckinWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CheckinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    class_name?: SortOrder
    created_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    class_name?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    class_name?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    class_name?: SortOrder
    nganh?: SortOrder
    qr_code?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    class_name?: SortOrder
    nganh?: SortOrder
    qr_code?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    class_name?: SortOrder
    nganh?: SortOrder
    qr_code?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CheckinDetailListRelationFilter = {
    every?: CheckinDetailWhereInput
    some?: CheckinDetailWhereInput
    none?: CheckinDetailWhereInput
  }

  export type CheckinDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    point?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    point?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    point?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    point?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    point?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CheckinStudent_idCheckin_dateCompoundUniqueInput = {
    student_id: string
    checkin_date: Date | string
  }

  export type CheckinCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    checked_by?: SortOrder
    checkin_date?: SortOrder
    total_point?: SortOrder
    created_at?: SortOrder
  }

  export type CheckinAvgOrderByAggregateInput = {
    total_point?: SortOrder
  }

  export type CheckinMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    checked_by?: SortOrder
    checkin_date?: SortOrder
    total_point?: SortOrder
    created_at?: SortOrder
  }

  export type CheckinMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    checked_by?: SortOrder
    checkin_date?: SortOrder
    total_point?: SortOrder
    created_at?: SortOrder
  }

  export type CheckinSumOrderByAggregateInput = {
    total_point?: SortOrder
  }

  export type CheckinScalarRelationFilter = {
    is?: CheckinWhereInput
    isNot?: CheckinWhereInput
  }

  export type ActivityScalarRelationFilter = {
    is?: ActivityWhereInput
    isNot?: ActivityWhereInput
  }

  export type CheckinDetailCountOrderByAggregateInput = {
    id?: SortOrder
    checkin_id?: SortOrder
    activity_id?: SortOrder
    point?: SortOrder
  }

  export type CheckinDetailAvgOrderByAggregateInput = {
    point?: SortOrder
  }

  export type CheckinDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    checkin_id?: SortOrder
    activity_id?: SortOrder
    point?: SortOrder
  }

  export type CheckinDetailMinOrderByAggregateInput = {
    id?: SortOrder
    checkin_id?: SortOrder
    activity_id?: SortOrder
    point?: SortOrder
  }

  export type CheckinDetailSumOrderByAggregateInput = {
    point?: SortOrder
  }

  export type CheckinCreateNestedManyWithoutUserInput = {
    create?: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput> | CheckinCreateWithoutUserInput[] | CheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutUserInput | CheckinCreateOrConnectWithoutUserInput[]
    createMany?: CheckinCreateManyUserInputEnvelope
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
  }

  export type CheckinUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput> | CheckinCreateWithoutUserInput[] | CheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutUserInput | CheckinCreateOrConnectWithoutUserInput[]
    createMany?: CheckinCreateManyUserInputEnvelope
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CheckinUpdateManyWithoutUserNestedInput = {
    create?: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput> | CheckinCreateWithoutUserInput[] | CheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutUserInput | CheckinCreateOrConnectWithoutUserInput[]
    upsert?: CheckinUpsertWithWhereUniqueWithoutUserInput | CheckinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CheckinCreateManyUserInputEnvelope
    set?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    disconnect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    delete?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    update?: CheckinUpdateWithWhereUniqueWithoutUserInput | CheckinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CheckinUpdateManyWithWhereWithoutUserInput | CheckinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
  }

  export type CheckinUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput> | CheckinCreateWithoutUserInput[] | CheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutUserInput | CheckinCreateOrConnectWithoutUserInput[]
    upsert?: CheckinUpsertWithWhereUniqueWithoutUserInput | CheckinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CheckinCreateManyUserInputEnvelope
    set?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    disconnect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    delete?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    update?: CheckinUpdateWithWhereUniqueWithoutUserInput | CheckinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CheckinUpdateManyWithWhereWithoutUserInput | CheckinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
  }

  export type CheckinCreateNestedManyWithoutStudentInput = {
    create?: XOR<CheckinCreateWithoutStudentInput, CheckinUncheckedCreateWithoutStudentInput> | CheckinCreateWithoutStudentInput[] | CheckinUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutStudentInput | CheckinCreateOrConnectWithoutStudentInput[]
    createMany?: CheckinCreateManyStudentInputEnvelope
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
  }

  export type CheckinUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<CheckinCreateWithoutStudentInput, CheckinUncheckedCreateWithoutStudentInput> | CheckinCreateWithoutStudentInput[] | CheckinUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutStudentInput | CheckinCreateOrConnectWithoutStudentInput[]
    createMany?: CheckinCreateManyStudentInputEnvelope
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CheckinUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CheckinCreateWithoutStudentInput, CheckinUncheckedCreateWithoutStudentInput> | CheckinCreateWithoutStudentInput[] | CheckinUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutStudentInput | CheckinCreateOrConnectWithoutStudentInput[]
    upsert?: CheckinUpsertWithWhereUniqueWithoutStudentInput | CheckinUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CheckinCreateManyStudentInputEnvelope
    set?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    disconnect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    delete?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    update?: CheckinUpdateWithWhereUniqueWithoutStudentInput | CheckinUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CheckinUpdateManyWithWhereWithoutStudentInput | CheckinUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
  }

  export type CheckinUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CheckinCreateWithoutStudentInput, CheckinUncheckedCreateWithoutStudentInput> | CheckinCreateWithoutStudentInput[] | CheckinUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutStudentInput | CheckinCreateOrConnectWithoutStudentInput[]
    upsert?: CheckinUpsertWithWhereUniqueWithoutStudentInput | CheckinUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CheckinCreateManyStudentInputEnvelope
    set?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    disconnect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    delete?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    update?: CheckinUpdateWithWhereUniqueWithoutStudentInput | CheckinUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CheckinUpdateManyWithWhereWithoutStudentInput | CheckinUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
  }

  export type CheckinDetailCreateNestedManyWithoutActivityInput = {
    create?: XOR<CheckinDetailCreateWithoutActivityInput, CheckinDetailUncheckedCreateWithoutActivityInput> | CheckinDetailCreateWithoutActivityInput[] | CheckinDetailUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: CheckinDetailCreateOrConnectWithoutActivityInput | CheckinDetailCreateOrConnectWithoutActivityInput[]
    createMany?: CheckinDetailCreateManyActivityInputEnvelope
    connect?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
  }

  export type CheckinDetailUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<CheckinDetailCreateWithoutActivityInput, CheckinDetailUncheckedCreateWithoutActivityInput> | CheckinDetailCreateWithoutActivityInput[] | CheckinDetailUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: CheckinDetailCreateOrConnectWithoutActivityInput | CheckinDetailCreateOrConnectWithoutActivityInput[]
    createMany?: CheckinDetailCreateManyActivityInputEnvelope
    connect?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CheckinDetailUpdateManyWithoutActivityNestedInput = {
    create?: XOR<CheckinDetailCreateWithoutActivityInput, CheckinDetailUncheckedCreateWithoutActivityInput> | CheckinDetailCreateWithoutActivityInput[] | CheckinDetailUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: CheckinDetailCreateOrConnectWithoutActivityInput | CheckinDetailCreateOrConnectWithoutActivityInput[]
    upsert?: CheckinDetailUpsertWithWhereUniqueWithoutActivityInput | CheckinDetailUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: CheckinDetailCreateManyActivityInputEnvelope
    set?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
    disconnect?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
    delete?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
    connect?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
    update?: CheckinDetailUpdateWithWhereUniqueWithoutActivityInput | CheckinDetailUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: CheckinDetailUpdateManyWithWhereWithoutActivityInput | CheckinDetailUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: CheckinDetailScalarWhereInput | CheckinDetailScalarWhereInput[]
  }

  export type CheckinDetailUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<CheckinDetailCreateWithoutActivityInput, CheckinDetailUncheckedCreateWithoutActivityInput> | CheckinDetailCreateWithoutActivityInput[] | CheckinDetailUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: CheckinDetailCreateOrConnectWithoutActivityInput | CheckinDetailCreateOrConnectWithoutActivityInput[]
    upsert?: CheckinDetailUpsertWithWhereUniqueWithoutActivityInput | CheckinDetailUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: CheckinDetailCreateManyActivityInputEnvelope
    set?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
    disconnect?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
    delete?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
    connect?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
    update?: CheckinDetailUpdateWithWhereUniqueWithoutActivityInput | CheckinDetailUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: CheckinDetailUpdateManyWithWhereWithoutActivityInput | CheckinDetailUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: CheckinDetailScalarWhereInput | CheckinDetailScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutCheckinsInput = {
    create?: XOR<StudentCreateWithoutCheckinsInput, StudentUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutCheckinsInput
    connect?: StudentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCheckinsInput = {
    create?: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckinsInput
    connect?: UserWhereUniqueInput
  }

  export type CheckinDetailCreateNestedManyWithoutCheckinInput = {
    create?: XOR<CheckinDetailCreateWithoutCheckinInput, CheckinDetailUncheckedCreateWithoutCheckinInput> | CheckinDetailCreateWithoutCheckinInput[] | CheckinDetailUncheckedCreateWithoutCheckinInput[]
    connectOrCreate?: CheckinDetailCreateOrConnectWithoutCheckinInput | CheckinDetailCreateOrConnectWithoutCheckinInput[]
    createMany?: CheckinDetailCreateManyCheckinInputEnvelope
    connect?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
  }

  export type CheckinDetailUncheckedCreateNestedManyWithoutCheckinInput = {
    create?: XOR<CheckinDetailCreateWithoutCheckinInput, CheckinDetailUncheckedCreateWithoutCheckinInput> | CheckinDetailCreateWithoutCheckinInput[] | CheckinDetailUncheckedCreateWithoutCheckinInput[]
    connectOrCreate?: CheckinDetailCreateOrConnectWithoutCheckinInput | CheckinDetailCreateOrConnectWithoutCheckinInput[]
    createMany?: CheckinDetailCreateManyCheckinInputEnvelope
    connect?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
  }

  export type StudentUpdateOneRequiredWithoutCheckinsNestedInput = {
    create?: XOR<StudentCreateWithoutCheckinsInput, StudentUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutCheckinsInput
    upsert?: StudentUpsertWithoutCheckinsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutCheckinsInput, StudentUpdateWithoutCheckinsInput>, StudentUncheckedUpdateWithoutCheckinsInput>
  }

  export type UserUpdateOneRequiredWithoutCheckinsNestedInput = {
    create?: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckinsInput
    upsert?: UserUpsertWithoutCheckinsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCheckinsInput, UserUpdateWithoutCheckinsInput>, UserUncheckedUpdateWithoutCheckinsInput>
  }

  export type CheckinDetailUpdateManyWithoutCheckinNestedInput = {
    create?: XOR<CheckinDetailCreateWithoutCheckinInput, CheckinDetailUncheckedCreateWithoutCheckinInput> | CheckinDetailCreateWithoutCheckinInput[] | CheckinDetailUncheckedCreateWithoutCheckinInput[]
    connectOrCreate?: CheckinDetailCreateOrConnectWithoutCheckinInput | CheckinDetailCreateOrConnectWithoutCheckinInput[]
    upsert?: CheckinDetailUpsertWithWhereUniqueWithoutCheckinInput | CheckinDetailUpsertWithWhereUniqueWithoutCheckinInput[]
    createMany?: CheckinDetailCreateManyCheckinInputEnvelope
    set?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
    disconnect?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
    delete?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
    connect?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
    update?: CheckinDetailUpdateWithWhereUniqueWithoutCheckinInput | CheckinDetailUpdateWithWhereUniqueWithoutCheckinInput[]
    updateMany?: CheckinDetailUpdateManyWithWhereWithoutCheckinInput | CheckinDetailUpdateManyWithWhereWithoutCheckinInput[]
    deleteMany?: CheckinDetailScalarWhereInput | CheckinDetailScalarWhereInput[]
  }

  export type CheckinDetailUncheckedUpdateManyWithoutCheckinNestedInput = {
    create?: XOR<CheckinDetailCreateWithoutCheckinInput, CheckinDetailUncheckedCreateWithoutCheckinInput> | CheckinDetailCreateWithoutCheckinInput[] | CheckinDetailUncheckedCreateWithoutCheckinInput[]
    connectOrCreate?: CheckinDetailCreateOrConnectWithoutCheckinInput | CheckinDetailCreateOrConnectWithoutCheckinInput[]
    upsert?: CheckinDetailUpsertWithWhereUniqueWithoutCheckinInput | CheckinDetailUpsertWithWhereUniqueWithoutCheckinInput[]
    createMany?: CheckinDetailCreateManyCheckinInputEnvelope
    set?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
    disconnect?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
    delete?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
    connect?: CheckinDetailWhereUniqueInput | CheckinDetailWhereUniqueInput[]
    update?: CheckinDetailUpdateWithWhereUniqueWithoutCheckinInput | CheckinDetailUpdateWithWhereUniqueWithoutCheckinInput[]
    updateMany?: CheckinDetailUpdateManyWithWhereWithoutCheckinInput | CheckinDetailUpdateManyWithWhereWithoutCheckinInput[]
    deleteMany?: CheckinDetailScalarWhereInput | CheckinDetailScalarWhereInput[]
  }

  export type CheckinCreateNestedOneWithoutDetailsInput = {
    create?: XOR<CheckinCreateWithoutDetailsInput, CheckinUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: CheckinCreateOrConnectWithoutDetailsInput
    connect?: CheckinWhereUniqueInput
  }

  export type ActivityCreateNestedOneWithoutCheckinDetailsInput = {
    create?: XOR<ActivityCreateWithoutCheckinDetailsInput, ActivityUncheckedCreateWithoutCheckinDetailsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutCheckinDetailsInput
    connect?: ActivityWhereUniqueInput
  }

  export type CheckinUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<CheckinCreateWithoutDetailsInput, CheckinUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: CheckinCreateOrConnectWithoutDetailsInput
    upsert?: CheckinUpsertWithoutDetailsInput
    connect?: CheckinWhereUniqueInput
    update?: XOR<XOR<CheckinUpdateToOneWithWhereWithoutDetailsInput, CheckinUpdateWithoutDetailsInput>, CheckinUncheckedUpdateWithoutDetailsInput>
  }

  export type ActivityUpdateOneRequiredWithoutCheckinDetailsNestedInput = {
    create?: XOR<ActivityCreateWithoutCheckinDetailsInput, ActivityUncheckedCreateWithoutCheckinDetailsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutCheckinDetailsInput
    upsert?: ActivityUpsertWithoutCheckinDetailsInput
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutCheckinDetailsInput, ActivityUpdateWithoutCheckinDetailsInput>, ActivityUncheckedUpdateWithoutCheckinDetailsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CheckinCreateWithoutUserInput = {
    id?: string
    checkin_date: Date | string
    total_point: number
    created_at?: Date | string
    student: StudentCreateNestedOneWithoutCheckinsInput
    details?: CheckinDetailCreateNestedManyWithoutCheckinInput
  }

  export type CheckinUncheckedCreateWithoutUserInput = {
    id?: string
    student_id: string
    checkin_date: Date | string
    total_point: number
    created_at?: Date | string
    details?: CheckinDetailUncheckedCreateNestedManyWithoutCheckinInput
  }

  export type CheckinCreateOrConnectWithoutUserInput = {
    where: CheckinWhereUniqueInput
    create: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput>
  }

  export type CheckinCreateManyUserInputEnvelope = {
    data: CheckinCreateManyUserInput | CheckinCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CheckinUpsertWithWhereUniqueWithoutUserInput = {
    where: CheckinWhereUniqueInput
    update: XOR<CheckinUpdateWithoutUserInput, CheckinUncheckedUpdateWithoutUserInput>
    create: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput>
  }

  export type CheckinUpdateWithWhereUniqueWithoutUserInput = {
    where: CheckinWhereUniqueInput
    data: XOR<CheckinUpdateWithoutUserInput, CheckinUncheckedUpdateWithoutUserInput>
  }

  export type CheckinUpdateManyWithWhereWithoutUserInput = {
    where: CheckinScalarWhereInput
    data: XOR<CheckinUpdateManyMutationInput, CheckinUncheckedUpdateManyWithoutUserInput>
  }

  export type CheckinScalarWhereInput = {
    AND?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
    OR?: CheckinScalarWhereInput[]
    NOT?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
    id?: UuidFilter<"Checkin"> | string
    student_id?: UuidFilter<"Checkin"> | string
    checked_by?: UuidFilter<"Checkin"> | string
    checkin_date?: DateTimeFilter<"Checkin"> | Date | string
    total_point?: IntFilter<"Checkin"> | number
    created_at?: DateTimeFilter<"Checkin"> | Date | string
  }

  export type CheckinCreateWithoutStudentInput = {
    id?: string
    checkin_date: Date | string
    total_point: number
    created_at?: Date | string
    user: UserCreateNestedOneWithoutCheckinsInput
    details?: CheckinDetailCreateNestedManyWithoutCheckinInput
  }

  export type CheckinUncheckedCreateWithoutStudentInput = {
    id?: string
    checked_by: string
    checkin_date: Date | string
    total_point: number
    created_at?: Date | string
    details?: CheckinDetailUncheckedCreateNestedManyWithoutCheckinInput
  }

  export type CheckinCreateOrConnectWithoutStudentInput = {
    where: CheckinWhereUniqueInput
    create: XOR<CheckinCreateWithoutStudentInput, CheckinUncheckedCreateWithoutStudentInput>
  }

  export type CheckinCreateManyStudentInputEnvelope = {
    data: CheckinCreateManyStudentInput | CheckinCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type CheckinUpsertWithWhereUniqueWithoutStudentInput = {
    where: CheckinWhereUniqueInput
    update: XOR<CheckinUpdateWithoutStudentInput, CheckinUncheckedUpdateWithoutStudentInput>
    create: XOR<CheckinCreateWithoutStudentInput, CheckinUncheckedCreateWithoutStudentInput>
  }

  export type CheckinUpdateWithWhereUniqueWithoutStudentInput = {
    where: CheckinWhereUniqueInput
    data: XOR<CheckinUpdateWithoutStudentInput, CheckinUncheckedUpdateWithoutStudentInput>
  }

  export type CheckinUpdateManyWithWhereWithoutStudentInput = {
    where: CheckinScalarWhereInput
    data: XOR<CheckinUpdateManyMutationInput, CheckinUncheckedUpdateManyWithoutStudentInput>
  }

  export type CheckinDetailCreateWithoutActivityInput = {
    id?: string
    point: number
    checkin: CheckinCreateNestedOneWithoutDetailsInput
  }

  export type CheckinDetailUncheckedCreateWithoutActivityInput = {
    id?: string
    checkin_id: string
    point: number
  }

  export type CheckinDetailCreateOrConnectWithoutActivityInput = {
    where: CheckinDetailWhereUniqueInput
    create: XOR<CheckinDetailCreateWithoutActivityInput, CheckinDetailUncheckedCreateWithoutActivityInput>
  }

  export type CheckinDetailCreateManyActivityInputEnvelope = {
    data: CheckinDetailCreateManyActivityInput | CheckinDetailCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type CheckinDetailUpsertWithWhereUniqueWithoutActivityInput = {
    where: CheckinDetailWhereUniqueInput
    update: XOR<CheckinDetailUpdateWithoutActivityInput, CheckinDetailUncheckedUpdateWithoutActivityInput>
    create: XOR<CheckinDetailCreateWithoutActivityInput, CheckinDetailUncheckedCreateWithoutActivityInput>
  }

  export type CheckinDetailUpdateWithWhereUniqueWithoutActivityInput = {
    where: CheckinDetailWhereUniqueInput
    data: XOR<CheckinDetailUpdateWithoutActivityInput, CheckinDetailUncheckedUpdateWithoutActivityInput>
  }

  export type CheckinDetailUpdateManyWithWhereWithoutActivityInput = {
    where: CheckinDetailScalarWhereInput
    data: XOR<CheckinDetailUpdateManyMutationInput, CheckinDetailUncheckedUpdateManyWithoutActivityInput>
  }

  export type CheckinDetailScalarWhereInput = {
    AND?: CheckinDetailScalarWhereInput | CheckinDetailScalarWhereInput[]
    OR?: CheckinDetailScalarWhereInput[]
    NOT?: CheckinDetailScalarWhereInput | CheckinDetailScalarWhereInput[]
    id?: UuidFilter<"CheckinDetail"> | string
    checkin_id?: UuidFilter<"CheckinDetail"> | string
    activity_id?: UuidFilter<"CheckinDetail"> | string
    point?: IntFilter<"CheckinDetail"> | number
  }

  export type StudentCreateWithoutCheckinsInput = {
    id?: string
    full_name: string
    phone?: string | null
    class_name: string
    nganh: string
    qr_code?: string | null
    is_active?: boolean
    created_at?: Date | string
  }

  export type StudentUncheckedCreateWithoutCheckinsInput = {
    id?: string
    full_name: string
    phone?: string | null
    class_name: string
    nganh: string
    qr_code?: string | null
    is_active?: boolean
    created_at?: Date | string
  }

  export type StudentCreateOrConnectWithoutCheckinsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutCheckinsInput, StudentUncheckedCreateWithoutCheckinsInput>
  }

  export type UserCreateWithoutCheckinsInput = {
    id: string
    full_name: string
    role?: $Enums.UserRole
    class_name?: string | null
    created_at?: Date | string
  }

  export type UserUncheckedCreateWithoutCheckinsInput = {
    id: string
    full_name: string
    role?: $Enums.UserRole
    class_name?: string | null
    created_at?: Date | string
  }

  export type UserCreateOrConnectWithoutCheckinsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
  }

  export type CheckinDetailCreateWithoutCheckinInput = {
    id?: string
    point: number
    activity: ActivityCreateNestedOneWithoutCheckinDetailsInput
  }

  export type CheckinDetailUncheckedCreateWithoutCheckinInput = {
    id?: string
    activity_id: string
    point: number
  }

  export type CheckinDetailCreateOrConnectWithoutCheckinInput = {
    where: CheckinDetailWhereUniqueInput
    create: XOR<CheckinDetailCreateWithoutCheckinInput, CheckinDetailUncheckedCreateWithoutCheckinInput>
  }

  export type CheckinDetailCreateManyCheckinInputEnvelope = {
    data: CheckinDetailCreateManyCheckinInput | CheckinDetailCreateManyCheckinInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutCheckinsInput = {
    update: XOR<StudentUpdateWithoutCheckinsInput, StudentUncheckedUpdateWithoutCheckinsInput>
    create: XOR<StudentCreateWithoutCheckinsInput, StudentUncheckedCreateWithoutCheckinsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutCheckinsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutCheckinsInput, StudentUncheckedUpdateWithoutCheckinsInput>
  }

  export type StudentUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    class_name?: StringFieldUpdateOperationsInput | string
    nganh?: StringFieldUpdateOperationsInput | string
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    class_name?: StringFieldUpdateOperationsInput | string
    nganh?: StringFieldUpdateOperationsInput | string
    qr_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutCheckinsInput = {
    update: XOR<UserUpdateWithoutCheckinsInput, UserUncheckedUpdateWithoutCheckinsInput>
    create: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCheckinsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCheckinsInput, UserUncheckedUpdateWithoutCheckinsInput>
  }

  export type UserUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    class_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    class_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinDetailUpsertWithWhereUniqueWithoutCheckinInput = {
    where: CheckinDetailWhereUniqueInput
    update: XOR<CheckinDetailUpdateWithoutCheckinInput, CheckinDetailUncheckedUpdateWithoutCheckinInput>
    create: XOR<CheckinDetailCreateWithoutCheckinInput, CheckinDetailUncheckedCreateWithoutCheckinInput>
  }

  export type CheckinDetailUpdateWithWhereUniqueWithoutCheckinInput = {
    where: CheckinDetailWhereUniqueInput
    data: XOR<CheckinDetailUpdateWithoutCheckinInput, CheckinDetailUncheckedUpdateWithoutCheckinInput>
  }

  export type CheckinDetailUpdateManyWithWhereWithoutCheckinInput = {
    where: CheckinDetailScalarWhereInput
    data: XOR<CheckinDetailUpdateManyMutationInput, CheckinDetailUncheckedUpdateManyWithoutCheckinInput>
  }

  export type CheckinCreateWithoutDetailsInput = {
    id?: string
    checkin_date: Date | string
    total_point: number
    created_at?: Date | string
    student: StudentCreateNestedOneWithoutCheckinsInput
    user: UserCreateNestedOneWithoutCheckinsInput
  }

  export type CheckinUncheckedCreateWithoutDetailsInput = {
    id?: string
    student_id: string
    checked_by: string
    checkin_date: Date | string
    total_point: number
    created_at?: Date | string
  }

  export type CheckinCreateOrConnectWithoutDetailsInput = {
    where: CheckinWhereUniqueInput
    create: XOR<CheckinCreateWithoutDetailsInput, CheckinUncheckedCreateWithoutDetailsInput>
  }

  export type ActivityCreateWithoutCheckinDetailsInput = {
    id?: string
    name: string
    point: number
    is_active?: boolean
    created_at?: Date | string
  }

  export type ActivityUncheckedCreateWithoutCheckinDetailsInput = {
    id?: string
    name: string
    point: number
    is_active?: boolean
    created_at?: Date | string
  }

  export type ActivityCreateOrConnectWithoutCheckinDetailsInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutCheckinDetailsInput, ActivityUncheckedCreateWithoutCheckinDetailsInput>
  }

  export type CheckinUpsertWithoutDetailsInput = {
    update: XOR<CheckinUpdateWithoutDetailsInput, CheckinUncheckedUpdateWithoutDetailsInput>
    create: XOR<CheckinCreateWithoutDetailsInput, CheckinUncheckedCreateWithoutDetailsInput>
    where?: CheckinWhereInput
  }

  export type CheckinUpdateToOneWithWhereWithoutDetailsInput = {
    where?: CheckinWhereInput
    data: XOR<CheckinUpdateWithoutDetailsInput, CheckinUncheckedUpdateWithoutDetailsInput>
  }

  export type CheckinUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkin_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutCheckinsNestedInput
    user?: UserUpdateOneRequiredWithoutCheckinsNestedInput
  }

  export type CheckinUncheckedUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    checked_by?: StringFieldUpdateOperationsInput | string
    checkin_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUpsertWithoutCheckinDetailsInput = {
    update: XOR<ActivityUpdateWithoutCheckinDetailsInput, ActivityUncheckedUpdateWithoutCheckinDetailsInput>
    create: XOR<ActivityCreateWithoutCheckinDetailsInput, ActivityUncheckedCreateWithoutCheckinDetailsInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutCheckinDetailsInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutCheckinDetailsInput, ActivityUncheckedUpdateWithoutCheckinDetailsInput>
  }

  export type ActivityUpdateWithoutCheckinDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateWithoutCheckinDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinCreateManyUserInput = {
    id?: string
    student_id: string
    checkin_date: Date | string
    total_point: number
    created_at?: Date | string
  }

  export type CheckinUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkin_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutCheckinsNestedInput
    details?: CheckinDetailUpdateManyWithoutCheckinNestedInput
  }

  export type CheckinUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    checkin_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: CheckinDetailUncheckedUpdateManyWithoutCheckinNestedInput
  }

  export type CheckinUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    checkin_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinCreateManyStudentInput = {
    id?: string
    checked_by: string
    checkin_date: Date | string
    total_point: number
    created_at?: Date | string
  }

  export type CheckinUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkin_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCheckinsNestedInput
    details?: CheckinDetailUpdateManyWithoutCheckinNestedInput
  }

  export type CheckinUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    checked_by?: StringFieldUpdateOperationsInput | string
    checkin_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: CheckinDetailUncheckedUpdateManyWithoutCheckinNestedInput
  }

  export type CheckinUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    checked_by?: StringFieldUpdateOperationsInput | string
    checkin_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinDetailCreateManyActivityInput = {
    id?: string
    checkin_id: string
    point: number
  }

  export type CheckinDetailUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    checkin?: CheckinUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type CheckinDetailUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkin_id?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
  }

  export type CheckinDetailUncheckedUpdateManyWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkin_id?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
  }

  export type CheckinDetailCreateManyCheckinInput = {
    id?: string
    activity_id: string
    point: number
  }

  export type CheckinDetailUpdateWithoutCheckinInput = {
    id?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    activity?: ActivityUpdateOneRequiredWithoutCheckinDetailsNestedInput
  }

  export type CheckinDetailUncheckedUpdateWithoutCheckinInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity_id?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
  }

  export type CheckinDetailUncheckedUpdateManyWithoutCheckinInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity_id?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}