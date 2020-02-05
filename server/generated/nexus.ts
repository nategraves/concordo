/**
 * This file was automatically generated by Nexus 0.9.17
 * Do not make changes to this file directly
 */




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  DepartmentCreateInput: { // input type
    id?: string | null; // ID
    name: string; // String!
    projects?: NexusGenInputs['ProjectCreateManyWithoutDepartmentsInput'] | null; // ProjectCreateManyWithoutDepartmentsInput
  }
  DepartmentCreateManyWithoutProjectsInput: { // input type
    connect?: NexusGenInputs['DepartmentWhereUniqueInput'][] | null; // [DepartmentWhereUniqueInput!]
    create?: NexusGenInputs['DepartmentCreateWithoutProjectsInput'][] | null; // [DepartmentCreateWithoutProjectsInput!]
  }
  DepartmentCreateWithoutProjectsInput: { // input type
    id?: string | null; // ID
    name: string; // String!
  }
  DepartmentWhereInput: { // input type
    AND?: NexusGenInputs['DepartmentWhereInput'][] | null; // [DepartmentWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['DepartmentWhereInput'][] | null; // [DepartmentWhereInput!]
    OR?: NexusGenInputs['DepartmentWhereInput'][] | null; // [DepartmentWhereInput!]
    projects_every?: NexusGenInputs['ProjectWhereInput'] | null; // ProjectWhereInput
    projects_none?: NexusGenInputs['ProjectWhereInput'] | null; // ProjectWhereInput
    projects_some?: NexusGenInputs['ProjectWhereInput'] | null; // ProjectWhereInput
  }
  DepartmentWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  FeedbackRoundCreateInput: { // input type
    id?: string | null; // ID
    roundEnd?: any | null; // DateTime
    users?: NexusGenInputs['UserCreateManyWithoutFeedbackRoundsInput'] | null; // UserCreateManyWithoutFeedbackRoundsInput
  }
  FeedbackRoundCreateManyWithoutUsersInput: { // input type
    connect?: NexusGenInputs['FeedbackRoundWhereUniqueInput'][] | null; // [FeedbackRoundWhereUniqueInput!]
    create?: NexusGenInputs['FeedbackRoundCreateWithoutUsersInput'][] | null; // [FeedbackRoundCreateWithoutUsersInput!]
  }
  FeedbackRoundCreateWithoutUsersInput: { // input type
    id?: string | null; // ID
    roundEnd?: any | null; // DateTime
  }
  FeedbackRoundWhereInput: { // input type
    AND?: NexusGenInputs['FeedbackRoundWhereInput'][] | null; // [FeedbackRoundWhereInput!]
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['FeedbackRoundWhereInput'][] | null; // [FeedbackRoundWhereInput!]
    OR?: NexusGenInputs['FeedbackRoundWhereInput'][] | null; // [FeedbackRoundWhereInput!]
    roundEnd?: any | null; // DateTime
    roundEnd_gt?: any | null; // DateTime
    roundEnd_gte?: any | null; // DateTime
    roundEnd_in?: any[] | null; // [DateTime!]
    roundEnd_lt?: any | null; // DateTime
    roundEnd_lte?: any | null; // DateTime
    roundEnd_not?: any | null; // DateTime
    roundEnd_not_in?: any[] | null; // [DateTime!]
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
    users_every?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    users_none?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    users_some?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  FeedbackRoundWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  FeedbackTargetCreateInput: { // input type
    createdBy?: NexusGenInputs['UserCreateOneInput'] | null; // UserCreateOneInput
    id?: string | null; // ID
    name: string; // String!
    project: NexusGenInputs['ProjectCreateOneInput']; // ProjectCreateOneInput!
  }
  FeedbackTargetCreateOneInput: { // input type
    connect?: NexusGenInputs['FeedbackTargetWhereUniqueInput'] | null; // FeedbackTargetWhereUniqueInput
    create?: NexusGenInputs['FeedbackTargetCreateInput'] | null; // FeedbackTargetCreateInput
  }
  FeedbackTargetWhereInput: { // input type
    AND?: NexusGenInputs['FeedbackTargetWhereInput'][] | null; // [FeedbackTargetWhereInput!]
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    createdBy?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['FeedbackTargetWhereInput'][] | null; // [FeedbackTargetWhereInput!]
    OR?: NexusGenInputs['FeedbackTargetWhereInput'][] | null; // [FeedbackTargetWhereInput!]
    project?: NexusGenInputs['ProjectWhereInput'] | null; // ProjectWhereInput
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  FeedbackTargetWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  MediaCreateInput: { // input type
    id?: string | null; // ID
    name: string; // String!
    target: NexusGenInputs['FeedbackTargetCreateOneInput']; // FeedbackTargetCreateOneInput!
  }
  MediaWhereInput: { // input type
    AND?: NexusGenInputs['MediaWhereInput'][] | null; // [MediaWhereInput!]
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['MediaWhereInput'][] | null; // [MediaWhereInput!]
    OR?: NexusGenInputs['MediaWhereInput'][] | null; // [MediaWhereInput!]
    target?: NexusGenInputs['FeedbackTargetWhereInput'] | null; // FeedbackTargetWhereInput
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  MediaWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  ProjectCreateInput: { // input type
    createdBy?: NexusGenInputs['UserCreateOneWithoutProjectsInput'] | null; // UserCreateOneWithoutProjectsInput
    departments?: NexusGenInputs['DepartmentCreateManyWithoutProjectsInput'] | null; // DepartmentCreateManyWithoutProjectsInput
    id?: string | null; // ID
    name: string; // String!
  }
  ProjectCreateManyWithoutCreatedByInput: { // input type
    connect?: NexusGenInputs['ProjectWhereUniqueInput'][] | null; // [ProjectWhereUniqueInput!]
    create?: NexusGenInputs['ProjectCreateWithoutCreatedByInput'][] | null; // [ProjectCreateWithoutCreatedByInput!]
  }
  ProjectCreateManyWithoutDepartmentsInput: { // input type
    connect?: NexusGenInputs['ProjectWhereUniqueInput'][] | null; // [ProjectWhereUniqueInput!]
    create?: NexusGenInputs['ProjectCreateWithoutDepartmentsInput'][] | null; // [ProjectCreateWithoutDepartmentsInput!]
  }
  ProjectCreateOneInput: { // input type
    connect?: NexusGenInputs['ProjectWhereUniqueInput'] | null; // ProjectWhereUniqueInput
    create?: NexusGenInputs['ProjectCreateInput'] | null; // ProjectCreateInput
  }
  ProjectCreateWithoutCreatedByInput: { // input type
    departments?: NexusGenInputs['DepartmentCreateManyWithoutProjectsInput'] | null; // DepartmentCreateManyWithoutProjectsInput
    id?: string | null; // ID
    name: string; // String!
  }
  ProjectCreateWithoutDepartmentsInput: { // input type
    createdBy?: NexusGenInputs['UserCreateOneWithoutProjectsInput'] | null; // UserCreateOneWithoutProjectsInput
    id?: string | null; // ID
    name: string; // String!
  }
  ProjectWhereInput: { // input type
    AND?: NexusGenInputs['ProjectWhereInput'][] | null; // [ProjectWhereInput!]
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    createdBy?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    departments_every?: NexusGenInputs['DepartmentWhereInput'] | null; // DepartmentWhereInput
    departments_none?: NexusGenInputs['DepartmentWhereInput'] | null; // DepartmentWhereInput
    departments_some?: NexusGenInputs['DepartmentWhereInput'] | null; // DepartmentWhereInput
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['ProjectWhereInput'][] | null; // [ProjectWhereInput!]
    OR?: NexusGenInputs['ProjectWhereInput'][] | null; // [ProjectWhereInput!]
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  ProjectWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  ScriptCreateInput: { // input type
    id?: string | null; // ID
  }
  ScriptWhereInput: { // input type
    AND?: NexusGenInputs['ScriptWhereInput'][] | null; // [ScriptWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['ScriptWhereInput'][] | null; // [ScriptWhereInput!]
    OR?: NexusGenInputs['ScriptWhereInput'][] | null; // [ScriptWhereInput!]
  }
  ScriptWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  UserCreateInput: { // input type
    email: string; // String!
    feedbackRounds?: NexusGenInputs['FeedbackRoundCreateManyWithoutUsersInput'] | null; // FeedbackRoundCreateManyWithoutUsersInput
    id?: string | null; // ID
    name: string; // String!
    projects?: NexusGenInputs['ProjectCreateManyWithoutCreatedByInput'] | null; // ProjectCreateManyWithoutCreatedByInput
  }
  UserCreateManyWithoutFeedbackRoundsInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'][] | null; // [UserWhereUniqueInput!]
    create?: NexusGenInputs['UserCreateWithoutFeedbackRoundsInput'][] | null; // [UserCreateWithoutFeedbackRoundsInput!]
  }
  UserCreateOneInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateInput'] | null; // UserCreateInput
  }
  UserCreateOneWithoutProjectsInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutProjectsInput'] | null; // UserCreateWithoutProjectsInput
  }
  UserCreateWithoutFeedbackRoundsInput: { // input type
    email: string; // String!
    id?: string | null; // ID
    name: string; // String!
    projects?: NexusGenInputs['ProjectCreateManyWithoutCreatedByInput'] | null; // ProjectCreateManyWithoutCreatedByInput
  }
  UserCreateWithoutProjectsInput: { // input type
    email: string; // String!
    feedbackRounds?: NexusGenInputs['FeedbackRoundCreateManyWithoutUsersInput'] | null; // FeedbackRoundCreateManyWithoutUsersInput
    id?: string | null; // ID
    name: string; // String!
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    email?: string | null; // String
    email_contains?: string | null; // String
    email_ends_with?: string | null; // String
    email_gt?: string | null; // String
    email_gte?: string | null; // String
    email_in?: string[] | null; // [String!]
    email_lt?: string | null; // String
    email_lte?: string | null; // String
    email_not?: string | null; // String
    email_not_contains?: string | null; // String
    email_not_ends_with?: string | null; // String
    email_not_in?: string[] | null; // [String!]
    email_not_starts_with?: string | null; // String
    email_starts_with?: string | null; // String
    feedbackRounds_every?: NexusGenInputs['FeedbackRoundWhereInput'] | null; // FeedbackRoundWhereInput
    feedbackRounds_none?: NexusGenInputs['FeedbackRoundWhereInput'] | null; // FeedbackRoundWhereInput
    feedbackRounds_some?: NexusGenInputs['FeedbackRoundWhereInput'] | null; // FeedbackRoundWhereInput
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    projects_every?: NexusGenInputs['ProjectWhereInput'] | null; // ProjectWhereInput
    projects_none?: NexusGenInputs['ProjectWhereInput'] | null; // ProjectWhereInput
    projects_some?: NexusGenInputs['ProjectWhereInput'] | null; // ProjectWhereInput
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  DepartmentOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  FeedbackRoundOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "roundEnd_ASC" | "roundEnd_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  FeedbackTargetOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  MediaOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  ProjectOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  ScriptOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  UserOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "email_ASC" | "email_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
}

export interface NexusGenRootTypes {
  Department: { // root type
    id: string; // ID!
    name: string; // String!
  }
  FeedbackRound: { // root type
    createdAt: any; // DateTime!
    id: string; // ID!
    roundEnd?: any | null; // DateTime
    updatedAt: any; // DateTime!
  }
  FeedbackTarget: { // root type
    createdAt: any; // DateTime!
    id: string; // ID!
    name: string; // String!
    updatedAt: any; // DateTime!
  }
  Media: { // root type
    createdAt: any; // DateTime!
    id: string; // ID!
    name: string; // String!
    updatedAt: any; // DateTime!
  }
  Mutation: {};
  Project: { // root type
    createdAt: any; // DateTime!
    id: string; // ID!
    name: string; // String!
    updatedAt: any; // DateTime!
  }
  Query: {};
  Script: { // root type
    id: string; // ID!
  }
  User: { // root type
    createdAt: any; // DateTime!
    email: string; // String!
    id: string; // ID!
    name: string; // String!
    updatedAt: any; // DateTime!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  DepartmentCreateInput: NexusGenInputs['DepartmentCreateInput'];
  DepartmentCreateManyWithoutProjectsInput: NexusGenInputs['DepartmentCreateManyWithoutProjectsInput'];
  DepartmentCreateWithoutProjectsInput: NexusGenInputs['DepartmentCreateWithoutProjectsInput'];
  DepartmentWhereInput: NexusGenInputs['DepartmentWhereInput'];
  DepartmentWhereUniqueInput: NexusGenInputs['DepartmentWhereUniqueInput'];
  FeedbackRoundCreateInput: NexusGenInputs['FeedbackRoundCreateInput'];
  FeedbackRoundCreateManyWithoutUsersInput: NexusGenInputs['FeedbackRoundCreateManyWithoutUsersInput'];
  FeedbackRoundCreateWithoutUsersInput: NexusGenInputs['FeedbackRoundCreateWithoutUsersInput'];
  FeedbackRoundWhereInput: NexusGenInputs['FeedbackRoundWhereInput'];
  FeedbackRoundWhereUniqueInput: NexusGenInputs['FeedbackRoundWhereUniqueInput'];
  FeedbackTargetCreateInput: NexusGenInputs['FeedbackTargetCreateInput'];
  FeedbackTargetCreateOneInput: NexusGenInputs['FeedbackTargetCreateOneInput'];
  FeedbackTargetWhereInput: NexusGenInputs['FeedbackTargetWhereInput'];
  FeedbackTargetWhereUniqueInput: NexusGenInputs['FeedbackTargetWhereUniqueInput'];
  MediaCreateInput: NexusGenInputs['MediaCreateInput'];
  MediaWhereInput: NexusGenInputs['MediaWhereInput'];
  MediaWhereUniqueInput: NexusGenInputs['MediaWhereUniqueInput'];
  ProjectCreateInput: NexusGenInputs['ProjectCreateInput'];
  ProjectCreateManyWithoutCreatedByInput: NexusGenInputs['ProjectCreateManyWithoutCreatedByInput'];
  ProjectCreateManyWithoutDepartmentsInput: NexusGenInputs['ProjectCreateManyWithoutDepartmentsInput'];
  ProjectCreateOneInput: NexusGenInputs['ProjectCreateOneInput'];
  ProjectCreateWithoutCreatedByInput: NexusGenInputs['ProjectCreateWithoutCreatedByInput'];
  ProjectCreateWithoutDepartmentsInput: NexusGenInputs['ProjectCreateWithoutDepartmentsInput'];
  ProjectWhereInput: NexusGenInputs['ProjectWhereInput'];
  ProjectWhereUniqueInput: NexusGenInputs['ProjectWhereUniqueInput'];
  ScriptCreateInput: NexusGenInputs['ScriptCreateInput'];
  ScriptWhereInput: NexusGenInputs['ScriptWhereInput'];
  ScriptWhereUniqueInput: NexusGenInputs['ScriptWhereUniqueInput'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserCreateManyWithoutFeedbackRoundsInput: NexusGenInputs['UserCreateManyWithoutFeedbackRoundsInput'];
  UserCreateOneInput: NexusGenInputs['UserCreateOneInput'];
  UserCreateOneWithoutProjectsInput: NexusGenInputs['UserCreateOneWithoutProjectsInput'];
  UserCreateWithoutFeedbackRoundsInput: NexusGenInputs['UserCreateWithoutFeedbackRoundsInput'];
  UserCreateWithoutProjectsInput: NexusGenInputs['UserCreateWithoutProjectsInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  DepartmentOrderByInput: NexusGenEnums['DepartmentOrderByInput'];
  FeedbackRoundOrderByInput: NexusGenEnums['FeedbackRoundOrderByInput'];
  FeedbackTargetOrderByInput: NexusGenEnums['FeedbackTargetOrderByInput'];
  MediaOrderByInput: NexusGenEnums['MediaOrderByInput'];
  ProjectOrderByInput: NexusGenEnums['ProjectOrderByInput'];
  ScriptOrderByInput: NexusGenEnums['ScriptOrderByInput'];
  UserOrderByInput: NexusGenEnums['UserOrderByInput'];
}

export interface NexusGenFieldTypes {
  Department: { // field return type
    id: string; // ID!
    name: string; // String!
    projects: NexusGenRootTypes['Project'][] | null; // [Project!]
  }
  FeedbackRound: { // field return type
    createdAt: any; // DateTime!
    id: string; // ID!
    roundEnd: any | null; // DateTime
    updatedAt: any; // DateTime!
    users: NexusGenRootTypes['User'][] | null; // [User!]
  }
  FeedbackTarget: { // field return type
    createdAt: any; // DateTime!
    createdBy: NexusGenRootTypes['User'] | null; // User
    id: string; // ID!
    name: string; // String!
    project: NexusGenRootTypes['Project']; // Project!
    updatedAt: any; // DateTime!
  }
  Media: { // field return type
    createdAt: any; // DateTime!
    id: string; // ID!
    name: string; // String!
    target: NexusGenRootTypes['FeedbackTarget']; // FeedbackTarget!
    updatedAt: any; // DateTime!
  }
  Mutation: { // field return type
    createDepartment: NexusGenRootTypes['Department']; // Department!
    createFeedbackRound: NexusGenRootTypes['FeedbackRound']; // FeedbackRound!
    createFeedbackTarget: NexusGenRootTypes['FeedbackTarget']; // FeedbackTarget!
    createMedia: NexusGenRootTypes['Media']; // Media!
    createProject: NexusGenRootTypes['Project']; // Project!
    createScript: NexusGenRootTypes['Script']; // Script!
    createUser: NexusGenRootTypes['User']; // User!
    deleteDepartment: NexusGenRootTypes['Department'] | null; // Department
    deleteProject: NexusGenRootTypes['Project'] | null; // Project
  }
  Project: { // field return type
    createdAt: any; // DateTime!
    createdBy: NexusGenRootTypes['User'] | null; // User
    departments: NexusGenRootTypes['Department'][] | null; // [Department!]
    id: string; // ID!
    name: string; // String!
    updatedAt: any; // DateTime!
  }
  Query: { // field return type
    department: NexusGenRootTypes['Department'] | null; // Department
    departments: NexusGenRootTypes['Department'][]; // [Department!]!
    feedbackRound: NexusGenRootTypes['FeedbackRound'] | null; // FeedbackRound
    feedbackRounds: NexusGenRootTypes['FeedbackRound'][]; // [FeedbackRound!]!
    feedbackTarget: NexusGenRootTypes['FeedbackTarget'] | null; // FeedbackTarget
    feedbackTargets: NexusGenRootTypes['FeedbackTarget'][]; // [FeedbackTarget!]!
    media: NexusGenRootTypes['Media'] | null; // Media
    medias: NexusGenRootTypes['Media'][]; // [Media!]!
    project: NexusGenRootTypes['Project'] | null; // Project
    projects: NexusGenRootTypes['Project'][]; // [Project!]!
    script: NexusGenRootTypes['Script'] | null; // Script
    scripts: NexusGenRootTypes['Script'][]; // [Script!]!
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  Script: { // field return type
    id: string; // ID!
  }
  User: { // field return type
    createdAt: any; // DateTime!
    email: string; // String!
    feedbackRounds: NexusGenRootTypes['FeedbackRound'][] | null; // [FeedbackRound!]
    id: string; // ID!
    name: string; // String!
    projects: NexusGenRootTypes['Project'][] | null; // [Project!]
    updatedAt: any; // DateTime!
  }
}

export interface NexusGenArgTypes {
  Department: {
    projects: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ProjectOrderByInput'] | null; // ProjectOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ProjectWhereInput'] | null; // ProjectWhereInput
    }
  }
  FeedbackRound: {
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
  Mutation: {
    createDepartment: { // args
      data: NexusGenInputs['DepartmentCreateInput']; // DepartmentCreateInput!
    }
    createFeedbackRound: { // args
      data: NexusGenInputs['FeedbackRoundCreateInput']; // FeedbackRoundCreateInput!
    }
    createFeedbackTarget: { // args
      data: NexusGenInputs['FeedbackTargetCreateInput']; // FeedbackTargetCreateInput!
    }
    createMedia: { // args
      data: NexusGenInputs['MediaCreateInput']; // MediaCreateInput!
    }
    createProject: { // args
      data: NexusGenInputs['ProjectCreateInput']; // ProjectCreateInput!
    }
    createScript: { // args
      data: NexusGenInputs['ScriptCreateInput']; // ScriptCreateInput!
    }
    createUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    deleteDepartment: { // args
      where: NexusGenInputs['DepartmentWhereUniqueInput']; // DepartmentWhereUniqueInput!
    }
    deleteProject: { // args
      where: NexusGenInputs['ProjectWhereUniqueInput']; // ProjectWhereUniqueInput!
    }
  }
  Project: {
    departments: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['DepartmentOrderByInput'] | null; // DepartmentOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['DepartmentWhereInput'] | null; // DepartmentWhereInput
    }
  }
  Query: {
    department: { // args
      where: NexusGenInputs['DepartmentWhereUniqueInput']; // DepartmentWhereUniqueInput!
    }
    departments: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['DepartmentOrderByInput'] | null; // DepartmentOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['DepartmentWhereInput'] | null; // DepartmentWhereInput
    }
    feedbackRound: { // args
      where: NexusGenInputs['FeedbackRoundWhereUniqueInput']; // FeedbackRoundWhereUniqueInput!
    }
    feedbackRounds: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['FeedbackRoundOrderByInput'] | null; // FeedbackRoundOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['FeedbackRoundWhereInput'] | null; // FeedbackRoundWhereInput
    }
    feedbackTarget: { // args
      where: NexusGenInputs['FeedbackTargetWhereUniqueInput']; // FeedbackTargetWhereUniqueInput!
    }
    feedbackTargets: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['FeedbackTargetOrderByInput'] | null; // FeedbackTargetOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['FeedbackTargetWhereInput'] | null; // FeedbackTargetWhereInput
    }
    media: { // args
      where: NexusGenInputs['MediaWhereUniqueInput']; // MediaWhereUniqueInput!
    }
    medias: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['MediaOrderByInput'] | null; // MediaOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['MediaWhereInput'] | null; // MediaWhereInput
    }
    project: { // args
      where: NexusGenInputs['ProjectWhereUniqueInput']; // ProjectWhereUniqueInput!
    }
    projects: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ProjectOrderByInput'] | null; // ProjectOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ProjectWhereInput'] | null; // ProjectWhereInput
    }
    script: { // args
      where: NexusGenInputs['ScriptWhereUniqueInput']; // ScriptWhereUniqueInput!
    }
    scripts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ScriptOrderByInput'] | null; // ScriptOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ScriptWhereInput'] | null; // ScriptWhereInput
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
  User: {
    feedbackRounds: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['FeedbackRoundOrderByInput'] | null; // FeedbackRoundOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['FeedbackRoundWhereInput'] | null; // FeedbackRoundWhereInput
    }
    projects: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ProjectOrderByInput'] | null; // ProjectOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ProjectWhereInput'] | null; // ProjectWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Department" | "FeedbackRound" | "FeedbackTarget" | "Media" | "Mutation" | "Project" | "Query" | "Script" | "User";

export type NexusGenInputNames = "DepartmentCreateInput" | "DepartmentCreateManyWithoutProjectsInput" | "DepartmentCreateWithoutProjectsInput" | "DepartmentWhereInput" | "DepartmentWhereUniqueInput" | "FeedbackRoundCreateInput" | "FeedbackRoundCreateManyWithoutUsersInput" | "FeedbackRoundCreateWithoutUsersInput" | "FeedbackRoundWhereInput" | "FeedbackRoundWhereUniqueInput" | "FeedbackTargetCreateInput" | "FeedbackTargetCreateOneInput" | "FeedbackTargetWhereInput" | "FeedbackTargetWhereUniqueInput" | "MediaCreateInput" | "MediaWhereInput" | "MediaWhereUniqueInput" | "ProjectCreateInput" | "ProjectCreateManyWithoutCreatedByInput" | "ProjectCreateManyWithoutDepartmentsInput" | "ProjectCreateOneInput" | "ProjectCreateWithoutCreatedByInput" | "ProjectCreateWithoutDepartmentsInput" | "ProjectWhereInput" | "ProjectWhereUniqueInput" | "ScriptCreateInput" | "ScriptWhereInput" | "ScriptWhereUniqueInput" | "UserCreateInput" | "UserCreateManyWithoutFeedbackRoundsInput" | "UserCreateOneInput" | "UserCreateOneWithoutProjectsInput" | "UserCreateWithoutFeedbackRoundsInput" | "UserCreateWithoutProjectsInput" | "UserWhereInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "DepartmentOrderByInput" | "FeedbackRoundOrderByInput" | "FeedbackTargetOrderByInput" | "MediaOrderByInput" | "ProjectOrderByInput" | "ScriptOrderByInput" | "UserOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}