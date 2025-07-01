import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: string | number | Date; output: string | number | Date };
};

export type Achievement = {
  __typename?: "Achievement";
  _id: Scalars["ID"]["output"];
  description: Scalars["String"]["output"];
  icon?: Maybe<Scalars["String"]["output"]>;
  threshold: Scalars["Int"]["output"];
  title: Scalars["String"]["output"];
};

export enum AllowedMediaEnum {
  Audio = "AUDIO",
  Image = "IMAGE",
  Text = "TEXT",
  Video = "VIDEO",
}

export type Appointment = {
  __typename?: "Appointment";
  chatRoomId?: Maybe<Scalars["String"]["output"]>;
  clientId: Scalars["String"]["output"];
  createdAt?: Maybe<Scalars["String"]["output"]>;
  lawyerId: Scalars["String"]["output"];
  schedule: Scalars["String"]["output"];
  status: AppointmentStatus;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export enum AppointmentStatus {
  Cancelled = "CANCELLED",
  Completed = "COMPLETED",
  Confirmed = "CONFIRMED",
  Pending = "PENDING",
}

export type Availability = {
  __typename?: "Availability";
  day: DayOfWeek;
  endTime: Scalars["String"]["output"];
  lawyerId: Scalars["String"]["output"];
  startTime: Scalars["String"]["output"];
};

export type ChatRoom = {
  __typename?: "ChatRoom";
  _id: Scalars["String"]["output"];
  allowedMedia?: Maybe<AllowedMediaEnum>;
  appointmentId: Scalars["String"]["output"];
  participants: Array<Scalars["String"]["output"]>;
};

export type Comment = {
  __typename?: "Comment";
  _id: Scalars["ID"]["output"];
  author: Scalars["String"]["output"];
  content: Scalars["String"]["output"];
  createdAt: Scalars["Date"]["output"];
  post: Scalars["ID"]["output"];
  updatedAt: Scalars["Date"]["output"];
};

export type CreateAchievementInput = {
  description: Scalars["String"]["input"];
  icon?: InputMaybe<Scalars["String"]["input"]>;
  threshold: Scalars["Int"]["input"];
  title: Scalars["String"]["input"];
};

export type CreateAppointmentInput = {
  clientId: Scalars["String"]["input"];
  lawyerId: Scalars["String"]["input"];
  schedule: Scalars["String"]["input"];
};

export type CreateChatRoomInput = {
  allowedMedia?: InputMaybe<AllowedMediaEnum>;
  appointmentId: Scalars["String"]["input"];
  participants: Array<Scalars["String"]["input"]>;
};

export type CreateCommentInput = {
  content: Scalars["String"]["input"];
  postId: Scalars["ID"]["input"];
};

export type CreateDocumentInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  images: Array<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
  type?: InputMaybe<MediaType>;
};

export type CreateLawyerInput = {
  achievements?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  bio?: InputMaybe<Scalars["String"]["input"]>;
  document?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  lawyerId: Scalars["ID"]["input"];
  licenseNumber: Scalars["String"]["input"];
  profilePicture: Scalars["String"]["input"];
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  specialization: Array<Scalars["ID"]["input"]>;
  university: Scalars["String"]["input"];
};

export type CreateLawyerRequestInput = {
  bio: Scalars["String"]["input"];
  documents?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  licenseNumber: Scalars["String"]["input"];
  profilePicture: Scalars["String"]["input"];
  specializations: Array<CreateSpecializationInput>;
  university: Scalars["String"]["input"];
};

export type CreatePostInput = {
  content: MediaInput;
  specialization: Array<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
  type: Media;
};

export type CreateReviewInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  rating: Scalars["Int"]["input"];
};

export type CreateSpecializationInput = {
  categoryName: SpecializationCategory;
  pricePerHour?: InputMaybe<Scalars["Int"]["input"]>;
  subscription: Scalars["Boolean"]["input"];
};

export enum DayOfWeek {
  Friday = "FRIDAY",
  Monday = "MONDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
  Thursday = "THURSDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
}

export type DeleteCommentInput = {
  commentId: Scalars["ID"]["input"];
};

export type Document = {
  __typename?: "Document";
  _id: Scalars["ID"]["output"];
  clientId: Scalars["String"]["output"];
  content?: Maybe<Scalars["String"]["output"]>;
  images: Array<Scalars["String"]["output"]>;
  lawyerId?: Maybe<Scalars["ID"]["output"]>;
  reviewComment?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<ReviewStatus>;
  title: Scalars["String"]["output"];
  type?: Maybe<DocumentMediaType>;
};

export enum DocumentMediaType {
  File = "FILE",
  Image = "IMAGE",
  Text = "TEXT",
}

export type Lawyer = {
  __typename?: "Lawyer";
  achievements: Array<Achievement>;
  bio?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["Date"]["output"];
  document?: Maybe<Scalars["String"]["output"]>;
  email: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  lawyerId: Scalars["ID"]["output"];
  licenseNumber: Scalars["String"]["output"];
  profilePicture: Scalars["String"]["output"];
  rating?: Maybe<Scalars["Int"]["output"]>;
  specialization: Array<Specialization>;
  university: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type LawyerRequest = {
  __typename?: "LawyerRequest";
  bio: Scalars["String"]["output"];
  createdAt: Scalars["Date"]["output"];
  documents?: Maybe<Scalars["String"]["output"]>;
  email: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  lawyerId: Scalars["ID"]["output"];
  licenseNumber: Scalars["String"]["output"];
  profilePicture: Scalars["String"]["output"];
  specializations: Array<Specialization>;
  status: LawyerRequestStatus;
  university: Scalars["String"]["output"];
  updatedAt: Scalars["Date"]["output"];
};

export enum LawyerRequestStatus {
  Approved = "approved",
  Pending = "pending",
  Rejected = "rejected",
}

export enum Media {
  Image = "IMAGE",
  Text = "TEXT",
  Video = "VIDEO",
}

export type MediaInput = {
  audio?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  video?: InputMaybe<Scalars["String"]["input"]>;
};

export enum MediaType {
  Audio = "AUDIO",
  Image = "IMAGE",
  Text = "TEXT",
  Video = "VIDEO",
}

export type Message = {
  __typename?: "Message";
  chatRoomId: Scalars["ID"]["output"];
  content?: Maybe<Scalars["String"]["output"]>;
  type: MediaType;
  userId: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  approveLawyerRequest: Scalars["Boolean"]["output"];
  createAchievement: Achievement;
  createAppointment?: Maybe<Appointment>;
  createChatRoom?: Maybe<Scalars["String"]["output"]>;
  createChatRoomAfterAppointment: ChatRoom;
  createComment: Comment;
  createDocument: Document;
  createLawyer: Lawyer;
  createLawyerRequest: LawyerRequest;
  createMessage?: Maybe<Message>;
  createNotification: Notification;
  createPost: Post;
  createReview: Review;
  createSpecialization: Specialization;
  deleteAchievement: Scalars["Boolean"]["output"];
  deleteComment: Scalars["Boolean"]["output"];
  deleteLawyer: Scalars["Boolean"]["output"];
  deletePost: Scalars["Boolean"]["output"];
  deleteReview: Scalars["Boolean"]["output"];
  deleteSpecialization: Scalars["Boolean"]["output"];
  markNotificationAsRead: Notification;
  rejectLawyerRequest: Scalars["Boolean"]["output"];
  reviewDocument: Document;
  setAvailability?: Maybe<Availability>;
  updateAchievement: Achievement;
  updateChatRoom: ChatRoom;
  updateComment: Comment;
  updateLawyer: Lawyer;
  updatePost: Post;
  updateReview: Review;
  updateSpecialization: Specialization;
};

export type MutationApproveLawyerRequestArgs = {
  lawyerId: Scalars["ID"]["input"];
};

export type MutationCreateAchievementArgs = {
  input: CreateAchievementInput;
};

export type MutationCreateAppointmentArgs = {
  input: CreateAppointmentInput;
};

export type MutationCreateChatRoomArgs = {
  appointmentId: Scalars["String"]["input"];
};

export type MutationCreateChatRoomAfterAppointmentArgs = {
  input: CreateChatRoomInput;
};

export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};

export type MutationCreateDocumentArgs = {
  input: CreateDocumentInput;
};

export type MutationCreateLawyerArgs = {
  input: CreateLawyerInput;
};

export type MutationCreateLawyerRequestArgs = {
  input: CreateLawyerRequestInput;
};

export type MutationCreateMessageArgs = {
  chatRoomId: Scalars["ID"]["input"];
  content?: InputMaybe<Scalars["String"]["input"]>;
  type: MediaType;
  userId: Scalars["String"]["input"];
};

export type MutationCreateNotificationArgs = {
  clientId?: InputMaybe<Scalars["ID"]["input"]>;
  content: Scalars["String"]["input"];
  lawyerId: Scalars["ID"]["input"];
  type: NotificationType;
};

export type MutationCreatePostArgs = {
  input: CreatePostInput;
};

export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
};

export type MutationCreateSpecializationArgs = {
  input: CreateSpecializationInput;
};

export type MutationDeleteAchievementArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};

export type MutationDeleteLawyerArgs = {
  lawyerId: Scalars["ID"]["input"];
};

export type MutationDeletePostArgs = {
  postId: Scalars["ID"]["input"];
};

export type MutationDeleteReviewArgs = {
  reviewId: Scalars["ID"]["input"];
};

export type MutationDeleteSpecializationArgs = {
  categoryName: SpecializationCategory;
};

export type MutationMarkNotificationAsReadArgs = {
  notificationId: Scalars["ID"]["input"];
};

export type MutationRejectLawyerRequestArgs = {
  lawyerId: Scalars["ID"]["input"];
};

export type MutationReviewDocumentArgs = {
  input: ReviewDocumentInput;
};

export type MutationSetAvailabilityArgs = {
  day: DayOfWeek;
  endTime: Scalars["String"]["input"];
  lawyerId: Scalars["String"]["input"];
  startTime: Scalars["String"]["input"];
};

export type MutationUpdateAchievementArgs = {
  input: UpdateAchievementInput;
};

export type MutationUpdateChatRoomArgs = {
  input: UpdateChatRoomInput;
};

export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};

export type MutationUpdateLawyerArgs = {
  input: UpdateLawyerInput;
  lawyerId: Scalars["ID"]["input"];
};

export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
  postId: Scalars["ID"]["input"];
};

export type MutationUpdateReviewArgs = {
  input: UpdateReviewInput;
  reviewId: Scalars["ID"]["input"];
};

export type MutationUpdateSpecializationArgs = {
  categoryName: SpecializationCategory;
  input: UpdateSpecializationInput;
};

export type Notification = {
  __typename?: "Notification";
  clientId?: Maybe<Scalars["String"]["output"]>;
  content: Scalars["String"]["output"];
  createdAt: Scalars["Date"]["output"];
  id: Scalars["ID"]["output"];
  lawyerId: Scalars["String"]["output"];
  read: Scalars["Boolean"]["output"];
  type: NotificationType;
};

export enum NotificationType {
  AppointmentCancellation = "APPOINTMENT_CANCELLATION",
  AppointmentConfirmation = "APPOINTMENT_CONFIRMATION",
  AppointmentReminder = "APPOINTMENT_REMINDER",
  AppointmentRequest = "APPOINTMENT_REQUEST",
  AppointmentStarted = "APPOINTMENT_STARTED",
  ReviewReceived = "REVIEW_RECEIVED",
  SpecializationUpdate = "SPECIALIZATION_UPDATE",
}

export type Post = {
  __typename?: "Post";
  _id: Scalars["ID"]["output"];
  content: Media;
  createdAt: Scalars["Date"]["output"];
  lawyerId: Scalars["String"]["output"];
  specialization: Array<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  type: Media;
  updatedAt: Scalars["Date"]["output"];
};

export type Query = {
  __typename?: "Query";
  getAchievements?: Maybe<Array<Maybe<Achievement>>>;
  getAppointmentById?: Maybe<Appointment>;
  getAppointments?: Maybe<Array<Maybe<Appointment>>>;
  getAppointmentsByLawyer?: Maybe<Array<Maybe<Appointment>>>;
  getAppointmentsByUser?: Maybe<Array<Maybe<Appointment>>>;
  getAvailability?: Maybe<Array<Maybe<Availability>>>;
  getChatRoomById?: Maybe<ChatRoom>;
  getChatRoomsByAppointment: Array<ChatRoom>;
  getCommentsByPost: Array<Comment>;
  getDocumentsByStatus: Array<Document>;
  getDocumentsByUser: Array<Document>;
  getLawyerById?: Maybe<Lawyer>;
  getLawyerRequestByLawyerId?: Maybe<LawyerRequest>;
  getLawyers: Array<Lawyer>;
  getLawyersByAchievement: Array<Lawyer>;
  getLawyersBySpecialization: Array<Lawyer>;
  getMessages: Array<Message>;
  getNotifications: Array<Notification>;
  getNotificationsClient: Array<Notification>;
  getNotificationsLawyer: Array<Notification>;
  getPendingLawyerRequests: Array<LawyerRequest>;
  getPostById?: Maybe<Post>;
  getPostsByLawyer: Array<Post>;
  getPostsBySpecializationId: Array<Post>;
  getReviewsByLawyer: Array<Review>;
  getReviewsByUser: Array<Review>;
  getSpecializationByCategory?: Maybe<Specialization>;
  getSpecializations: Array<Specialization>;
  getSpecializationsByLawyer: Array<Specialization>;
  searchPosts: Array<Post>;
};

export type QueryGetAchievementsArgs = {
  lawyerId: Scalars["ID"]["input"];
};

export type QueryGetAppointmentByIdArgs = {
  id: Scalars["String"]["input"];
};

export type QueryGetAppointmentsByLawyerArgs = {
  lawyerId: Scalars["String"]["input"];
};

export type QueryGetAppointmentsByUserArgs = {
  clientId: Scalars["String"]["input"];
};

export type QueryGetAvailabilityArgs = {
  day: DayOfWeek;
  lawyerId: Scalars["String"]["input"];
};

export type QueryGetChatRoomByIdArgs = {
  _id: Scalars["String"]["input"];
};

export type QueryGetChatRoomsByAppointmentArgs = {
  appointmentId: Scalars["String"]["input"];
};

export type QueryGetCommentsByPostArgs = {
  postId: Scalars["ID"]["input"];
};

export type QueryGetDocumentsByStatusArgs = {
  status: ReviewStatus;
};

export type QueryGetDocumentsByUserArgs = {
  userId: Scalars["String"]["input"];
};

export type QueryGetLawyerByIdArgs = {
  lawyerId: Scalars["ID"]["input"];
};

export type QueryGetLawyerRequestByLawyerIdArgs = {
  lawyerId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryGetLawyersByAchievementArgs = {
  achievementId: Scalars["ID"]["input"];
};

export type QueryGetLawyersBySpecializationArgs = {
  specializationId: Scalars["ID"]["input"];
};

export type QueryGetMessagesArgs = {
  chatRoomId: Scalars["ID"]["input"];
};

export type QueryGetNotificationsArgs = {
  userId: Scalars["ID"]["input"];
};

export type QueryGetNotificationsClientArgs = {
  clientId: Scalars["ID"]["input"];
};

export type QueryGetNotificationsLawyerArgs = {
  lawyerId: Scalars["ID"]["input"];
};

export type QueryGetPostByIdArgs = {
  postId: Scalars["ID"]["input"];
};

export type QueryGetPostsByLawyerArgs = {
  lawyerId: Scalars["String"]["input"];
};

export type QueryGetPostsBySpecializationIdArgs = {
  specializationId: Scalars["ID"]["input"];
};

export type QueryGetReviewsByLawyerArgs = {
  lawyerId: Scalars["ID"]["input"];
};

export type QueryGetReviewsByUserArgs = {
  clientId: Scalars["ID"]["input"];
};

export type QueryGetSpecializationByCategoryArgs = {
  categoryName: SpecializationCategory;
};

export type QueryGetSpecializationsByLawyerArgs = {
  lawyerId: Scalars["ID"]["input"];
  subscription?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QuerySearchPostsArgs = {
  query: Scalars["String"]["input"];
};

export type Review = {
  __typename?: "Review";
  clientId: Scalars["ID"]["output"];
  comment?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["Date"]["output"];
  id: Scalars["ID"]["output"];
  lawyerId: Scalars["ID"]["output"];
  rating: Scalars["Int"]["output"];
  updatedAt: Scalars["Date"]["output"];
};

export type ReviewDocumentInput = {
  documentId: Scalars["ID"]["input"];
  reviewComment?: InputMaybe<Scalars["String"]["input"]>;
  status: ReviewStatus;
};

export enum ReviewStatus {
  Pending = "PENDING",
  Rejected = "REJECTED",
  Reviewed = "REVIEWED",
}

export type Specialization = {
  __typename?: "Specialization";
  categoryName: SpecializationCategory;
  id: Scalars["ID"]["output"];
  pricePerHour?: Maybe<Scalars["Int"]["output"]>;
  subscription: Scalars["Boolean"]["output"];
};

export enum SpecializationCategory {
  Administrative = "Administrative",
  Civil = "Civil",
  Constitutional = "Constitutional",
  Criminal = "Criminal",
  Environmental = "Environmental",
  Family = "Family",
  Immigration = "Immigration",
  IntellectualProperty = "IntellectualProperty",
  Labor = "Labor",
  Property = "Property",
  Tax = "Tax",
}

export type Subscription = {
  __typename?: "Subscription";
  messageAdded?: Maybe<Message>;
};

export type SubscriptionMessageAddedArgs = {
  chatRoomId: Scalars["ID"]["input"];
};

export type UpdateAchievementInput = {
  _id: Scalars["ID"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  icon?: InputMaybe<Scalars["String"]["input"]>;
  threshold?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateChatRoomInput = {
  _id: Scalars["String"]["input"];
  allowedMedia?: InputMaybe<AllowedMediaEnum>;
  appointmentId?: InputMaybe<Scalars["String"]["input"]>;
  participants?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type UpdateCommentInput = {
  commentId: Scalars["ID"]["input"];
  content: Scalars["String"]["input"];
};

export type UpdateLawyerInput = {
  achievements?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  bio?: InputMaybe<Scalars["String"]["input"]>;
  document?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  licenseNumber?: InputMaybe<Scalars["String"]["input"]>;
  profilePicture?: InputMaybe<Scalars["String"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  specialization?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  university?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdatePostInput = {
  content?: InputMaybe<MediaInput>;
  specialization?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Media>;
};

export type UpdateReviewInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UpdateSpecializationInput = {
  pricePerHour?: InputMaybe<Scalars["Int"]["input"]>;
  subscription?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CreateAppointmentMutationVariables = Exact<{
  input: CreateAppointmentInput;
}>;

export type CreateAppointmentMutation = {
  __typename?: "Mutation";
  createAppointment?: {
    __typename?: "Appointment";
    lawyerId: string;
    schedule: string;
    status: AppointmentStatus;
    chatRoomId?: string | null;
  } | null;
};

export const CreateAppointmentDocument = gql`
  mutation CreateAppointment($input: CreateAppointmentInput!) {
    createAppointment(input: $input) {
      lawyerId
      schedule
      status
      chatRoomId
    }
  }
`;
export type CreateAppointmentMutationFn = Apollo.MutationFunction<
  CreateAppointmentMutation,
  CreateAppointmentMutationVariables
>;

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
export function useCreateAppointmentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAppointmentMutation,
    CreateAppointmentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateAppointmentMutation,
    CreateAppointmentMutationVariables
  >(CreateAppointmentDocument, options);
}
export type CreateAppointmentMutationHookResult = ReturnType<
  typeof useCreateAppointmentMutation
>;
export type CreateAppointmentMutationResult =
  Apollo.MutationResult<CreateAppointmentMutation>;
export type CreateAppointmentMutationOptions = Apollo.BaseMutationOptions<
  CreateAppointmentMutation,
  CreateAppointmentMutationVariables
>;
