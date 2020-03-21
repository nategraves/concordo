import { prisma } from "./generated/prisma-client";
import datamodelInfo from "./generated/nexus-prisma";
import * as path from "path";
import { stringArg, idArg, objectType } from "nexus";
import { prismaObjectType, makePrismaSchema } from "nexus-prisma";
import { GraphQLServer } from "graphql-yoga";
import { stripIgnoredCharacters } from "graphql";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

//const Query = prismaObjectType({
//name: 'Query',

const LoginResponse = objectType({
  name: "LoginResponse",
  definition(t) {
    t.prismaField("User"), t.string("token");
  }
});

const Query = prismaObjectType({
  name: "Query",
  definition(t) {
    t.prismaFields([
      "user",
      "users",
      "script",
      "scripts",
      "project",
      "projects",
      "feedbackTarget",
      "feedbackTargets",
      "department",
      "departments",
      "media",
      "medias",
      "feedbackRound",
      "feedbackRounds"
    ]);
  }
});

const Mutation = prismaObjectType({
  name: "Mutation",
  definition(t) {
    t.prismaFields([
      "createUser",
      "createScript",
      "createProject",
      "createFeedbackTarget",
      "createDepartment",
      "createFeedbackTarget",
      "createMedia",
      "createFeedbackRound",
      "deleteDepartment",
      "deleteProject"
    ]);
    t.field("register", {
      type: "User",
      args: {
        //@ts-ignore
        email: stringArg(),
        //@ts-ignore
        password: stringArg()
      },
      resolve: async (_, { email, password: rawPassword }, ctx) => {
        const password = await bcrypt.hashSync(rawPassword, 8);
        return ctx.prisma.createUser({ email, password });
      }
    });
    t.field("register", {
      type: "User",
      args: {
        //@ts-ignore
        email: stringArg(),
        //@ts-ignore
        password: stringArg()
      },
      resolve: async (_, { email, password: rawPassword }, ctx) => {
        const password = await bcrypt.hashSync(rawPassword, 8);
        return ctx.prisma.createUser({ email, password });
      }
    });
    t.field("login", {
      type: "String",
      args: {
        //@ts-ignore
        email: stringArg(),
        //@ts-ignore
        password: stringArg()
      },
      resolve: async (_, { email, password }, ctx) => {
        const user = await ctx.prisma.users({ where: { email } });

        if (!user) {
          throw new Error("Invalid login");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
          throw new Error("Invalid login");
        }

        const { id, email: userEmail } = user;

        const token = jwt.sign(
          {
            id,
            email: userEmail
          },
          "my-super-secret-secret-that-is-super-safe-and-secure",
          {
            expiresIn: "30d"
          }
        );

        return token;
      }
    });
  }
});

const schema = makePrismaSchema({
  types: [Query, Mutation],
  prisma: {
    datamodelInfo,
    client: prisma
  },
  outputs: {
    schema: path.join(__dirname, "./generated/schema.graphql"),
    typegen: path.join(__dirname, "./generated/nexus.ts")
  }
});

const server = new GraphQLServer({
  schema,
  context: { prisma }
});
server.start(() => console.log("Server is running on localhost:4000"));
