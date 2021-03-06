module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateReport {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createReport(data: ReportCreateInput!): Report!
  updateReport(data: ReportUpdateInput!, where: ReportWhereUniqueInput!): Report
  updateManyReports(data: ReportUpdateManyMutationInput!, where: ReportWhereInput): BatchPayload!
  upsertReport(where: ReportWhereUniqueInput!, create: ReportCreateInput!, update: ReportUpdateInput!): Report!
  deleteReport(where: ReportWhereUniqueInput!): Report
  deleteManyReports(where: ReportWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  report(where: ReportWhereUniqueInput!): Report
  reports(where: ReportWhereInput, orderBy: ReportOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Report]!
  reportsConnection(where: ReportWhereInput, orderBy: ReportOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReportConnection!
  node(id: ID!): Node
}

type Report {
  id: ID!
  status: String!
  notes: String!
  exercise: Int!
  food: String!
  social: String!
}

type ReportConnection {
  pageInfo: PageInfo!
  edges: [ReportEdge]!
  aggregate: AggregateReport!
}

input ReportCreateInput {
  id: ID
  status: String!
  notes: String!
  exercise: Int!
  food: String!
  social: String!
}

type ReportEdge {
  node: Report!
  cursor: String!
}

enum ReportOrderByInput {
  id_ASC
  id_DESC
  status_ASC
  status_DESC
  notes_ASC
  notes_DESC
  exercise_ASC
  exercise_DESC
  food_ASC
  food_DESC
  social_ASC
  social_DESC
}

type ReportPreviousValues {
  id: ID!
  status: String!
  notes: String!
  exercise: Int!
  food: String!
  social: String!
}

type ReportSubscriptionPayload {
  mutation: MutationType!
  node: Report
  updatedFields: [String!]
  previousValues: ReportPreviousValues
}

input ReportSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReportWhereInput
  AND: [ReportSubscriptionWhereInput!]
  OR: [ReportSubscriptionWhereInput!]
  NOT: [ReportSubscriptionWhereInput!]
}

input ReportUpdateInput {
  status: String
  notes: String
  exercise: Int
  food: String
  social: String
}

input ReportUpdateManyMutationInput {
  status: String
  notes: String
  exercise: Int
  food: String
  social: String
}

input ReportWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  notes: String
  notes_not: String
  notes_in: [String!]
  notes_not_in: [String!]
  notes_lt: String
  notes_lte: String
  notes_gt: String
  notes_gte: String
  notes_contains: String
  notes_not_contains: String
  notes_starts_with: String
  notes_not_starts_with: String
  notes_ends_with: String
  notes_not_ends_with: String
  exercise: Int
  exercise_not: Int
  exercise_in: [Int!]
  exercise_not_in: [Int!]
  exercise_lt: Int
  exercise_lte: Int
  exercise_gt: Int
  exercise_gte: Int
  food: String
  food_not: String
  food_in: [String!]
  food_not_in: [String!]
  food_lt: String
  food_lte: String
  food_gt: String
  food_gte: String
  food_contains: String
  food_not_contains: String
  food_starts_with: String
  food_not_starts_with: String
  food_ends_with: String
  food_not_ends_with: String
  social: String
  social_not: String
  social_in: [String!]
  social_not_in: [String!]
  social_lt: String
  social_lte: String
  social_gt: String
  social_gte: String
  social_contains: String
  social_not_contains: String
  social_starts_with: String
  social_not_starts_with: String
  social_ends_with: String
  social_not_ends_with: String
  AND: [ReportWhereInput!]
  OR: [ReportWhereInput!]
  NOT: [ReportWhereInput!]
}

input ReportWhereUniqueInput {
  id: ID
}

type Subscription {
  report(where: ReportSubscriptionWhereInput): ReportSubscriptionPayload
}
`
      }
    