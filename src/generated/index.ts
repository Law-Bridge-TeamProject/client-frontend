import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Appointment = {
  __typename?: 'Appointment';
  _id: Scalars['ID']['output'];
  chatRoomId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  lawyerId: Scalars['ID']['output'];
  schedule: Scalars['String']['output'];
  status: AppointmentStatus;
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId: Scalars['ID']['output'];
};

export enum AppointmentStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Confirmed = 'CONFIRMED',
  Pending = 'PENDING'
}

export type CreateAppointmentInput = {
  lawyerId: Scalars['ID']['input'];
  schedule: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAppointment?: Maybe<Appointment>;
  deleteAppointment?: Maybe<Scalars['Boolean']['output']>;
  updateAppointmentStatus?: Maybe<Appointment>;
};


export type MutationCreateAppointmentArgs = {
  input: CreateAppointmentInput;
};


export type MutationDeleteAppointmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAppointmentStatusArgs = {
  input: UpdateAppointmentStatusInput;
};

export type Query = {
  __typename?: 'Query';
  getAppointmentById?: Maybe<Appointment>;
  getAppointments?: Maybe<Array<Maybe<Appointment>>>;
  getAppointmentsByLawyer?: Maybe<Array<Maybe<Appointment>>>;
  getAppointmentsByUser?: Maybe<Array<Maybe<Appointment>>>;
};


export type QueryGetAppointmentByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetAppointmentsByLawyerArgs = {
  lawyerId: Scalars['ID']['input'];
};


export type QueryGetAppointmentsByUserArgs = {
  userId: Scalars['ID']['input'];
};

export type UpdateAppointmentStatusInput = {
  appointmentId: Scalars['ID']['input'];
  status: AppointmentStatus;
};

export type GetAppointmentsByUserQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type GetAppointmentsByUserQuery = { __typename?: 'Query', getAppointmentsByUser?: Array<{ __typename?: 'Appointment', _id: string, userId: string, lawyerId: string, schedule: string, status: AppointmentStatus, chatRoomId?: string | null, createdAt?: string | null, updatedAt?: string | null } | null> | null };


export const GetAppointmentsByUserDocument = gql`
    query GetAppointmentsByUser($userId: ID!) {
  getAppointmentsByUser(userId: $userId) {
    _id
    userId
    lawyerId
    schedule
    status
    chatRoomId
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetAppointmentsByUserQuery__
 *
 * To run a query within a React component, call `useGetAppointmentsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppointmentsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppointmentsByUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetAppointmentsByUserQuery(baseOptions: Apollo.QueryHookOptions<GetAppointmentsByUserQuery, GetAppointmentsByUserQueryVariables> & ({ variables: GetAppointmentsByUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAppointmentsByUserQuery, GetAppointmentsByUserQueryVariables>(GetAppointmentsByUserDocument, options);
      }
export function useGetAppointmentsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAppointmentsByUserQuery, GetAppointmentsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAppointmentsByUserQuery, GetAppointmentsByUserQueryVariables>(GetAppointmentsByUserDocument, options);
        }
export function useGetAppointmentsByUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAppointmentsByUserQuery, GetAppointmentsByUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAppointmentsByUserQuery, GetAppointmentsByUserQueryVariables>(GetAppointmentsByUserDocument, options);
        }
export type GetAppointmentsByUserQueryHookResult = ReturnType<typeof useGetAppointmentsByUserQuery>;
export type GetAppointmentsByUserLazyQueryHookResult = ReturnType<typeof useGetAppointmentsByUserLazyQuery>;
export type GetAppointmentsByUserSuspenseQueryHookResult = ReturnType<typeof useGetAppointmentsByUserSuspenseQuery>;
export type GetAppointmentsByUserQueryResult = Apollo.QueryResult<GetAppointmentsByUserQuery, GetAppointmentsByUserQueryVariables>;