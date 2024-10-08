import { Activity, Category, Competition, Experience, Predicate, Region, User } from "@prisma/client";
import { prismaClient } from "../src/application/database";
import bcrypt from "bcrypt";

export class UserTest {
  static async delete() {
    await prismaClient.user.deleteMany({
      where: {
        username: "test",
      },
    });
  }

  static async create() {
    await prismaClient.user.create({
      data: {
        username: "test",
        password: await bcrypt.hash("test", 10),
        email: "test",
        token: "test",
      },
    });
  }

  static async get(): Promise<User> {
    const user = await prismaClient.user.findFirst({
      where: {
        username: "test",
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}

export class CompetitionTest {
  static async deleteAll() {
    await prismaClient.competition.deleteMany({
      where: {
        username: "test",
      },
    });
  }

  static async create() {
    await prismaClient.competition.create({
      data: {
        name: "test",
        year: new Date("2024"),
        region: Region.NATIONAL,
        category: Category.Design,
        predicate: Predicate.Participant,
        username: "test",
      },
    });
  }

  static async get(): Promise<Competition> {
    const comp = await prismaClient.competition.findFirst({
      where: {
        username: "test",
      },
    });

    if (!comp) {
      throw new Error("Competition not found");
    }

    return comp;
  }
}

export class PortfolioTest {
  static async deleteAll() {
    await prismaClient.portfolio.deleteMany({
      where: {
        username: "test",
      },
    });
  }

  static async create() {
    await prismaClient.portfolio.create({
      data: {
        username: "test",
        full_name: "test",
        place_of_birth: "test",
        date_of_birth: new Date(),
        phone_number: "1234567892",
        domicile: "test",
        summary: "test",
        linkedin: "test",
        github: "test",
        instagram: "test",
        website: "test",
      },
    });
  }
}

export class ExperienceTest{
  static async create() {
    await prismaClient.experience.create({
      data: {
        username: "test",
        company_name: "test",
        position: "test",
        status: "CONTRACT",
        description: "test",
        place: "test",
        start_date: new Date(),
        end_date: new Date(),
      },
    });
  }

  static async deleteAll() {
    await prismaClient.experience.deleteMany({
      where: {
        username: "test",
      },
    });
  }

  static async get(): Promise<Experience> {
    const comp = await prismaClient.experience.findFirst({
      where: {
        username: "test",
      },
    });

    if (!comp) {
      throw new Error("Experience not found");
    }

    return comp;
  }
}

export class ActivityTest{
  static async create() {
    await prismaClient.activity.create({
      data: {
        username: "test",
        organization_name: "test",
        role: "test",
        description: "test",
        place: "test",
        start_date: new Date(),
        end_date: new Date(),
      },
    });
  }

  static async deleteAll() {
    await prismaClient.activity.deleteMany({
      where: {
        username: "test",
      },
    });
  }

  static async get(): Promise<Activity> {
    const act = await prismaClient.activity.findFirst({
      where: {
        username: "test",
      },
    });

    if (!act) {
      throw new Error("Activity not found");
    }

    return act;
  }
}