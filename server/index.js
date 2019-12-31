const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./src/generated/prisma-client')

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => (root, args, context, info) => {
      return context.prisma.reports()
    },
  },
  Mutation: {
    post: (root, args, context) => {
      return context.prisma.createReport({
        status: args.status,
        notes: args.notes,
        exercise: args.exercise,
        food: args.food,
        social: args.social
      })
    },
  },
  Report: {
    id: (parent) => parent.id,
    status: (parent) => parent.status,
    notes: (parent) => parent.notes,
    exercise: (parent) => parent.exercise,
    food: (parent) => parent.food,
    social: (parent) => parent.social,
  }
}

const server = new GraphQLServer({
    typeDefs: './schema/schema.graphql',
    resolvers,
    context: { prisma },
  })
  server.start(() => console.log(`Server is running on http://localhost:4000`))