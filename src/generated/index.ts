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

export type CreateAppointmentMutationVariables = Exact<{
  input: CreateAppointmentInput;
}>;


export type CreateAppointmentMutation = { __typename?: 'Mutation', createAppointment?: { __typename?: 'Appointment', lawyerId: string, schedule: string, status: AppointmentStatus, chatRoomId?: string | null, createdAt?: string | null, updatedAt?: string | null } | null };


export const CreateAppointmentDocument = gql`
    mutation CreateAppointment($input: CreateAppointmentInput!) {
  createAppointment(input: $input) {
    lawyerId
    schedule
    status
    chatRoomId
    createdAt
    updatedAt
  }
}
    `;
export type CreateAppointmentMutationFn = Apollo.MutationFunction<CreateAppointmentMutation, CreateAppointmentMutationVariables>;

/**
 * __useCreateAppointmentMutation__
 *
 * To run a mutation, you first call `useCreateAppointmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAppointmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAppointmentMutation, { data, loading, error }] = useCreateAppointmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAppointmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateAppointmentMutation, CreateAppointmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAppointmentMutation, CreateAppointmentMutationVariables>(CreateAppointmentDocument, options);
      }
export type CreateAppointmentMutationHookResult = ReturnType<typeof useCreateAppointmentMutation>;
export type CreateAppointmentMutationResult = Apollo.MutationResult<CreateAppointmentMutation>;
export type CreateAppointmentMutationOptions = Apollo.BaseMutationOptions<CreateAppointmentMutation, CreateAppointmentMutationVariables>;