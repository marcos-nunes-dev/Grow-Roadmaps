import {
  baseResolver,
  isAuthenticatedResolver,
  isAdminResolver,
} from '../../baseResolvers';
import {
  InvalidDataError,
  RoadmapAlreadyExists,
  UserNotFound,
  UnknownError,
} from '../../errors';

const getModules = isAuthenticatedResolver.createResolver(async root => {
  // return await root.getModule();
});

const RoadmapById = isAuthenticatedResolver.createResolver(
  async (root, { roadmapId }) => {
    // return await models.Roadmap.findById(roadmapId);
  }
);

const RoadmapByActive = isAuthenticatedResolver.createResolver(
  async (root, { active }) => {
    // return await models.Roadmap.findAll({ where: { active: active } });
  }
);

// Mutation type
const createNewRoadmap = isAdminResolver.createResolver(
  async (root, { input }) => {
    // const { name, icon, createdby, active } = input;
    // if (!name || !icon || !createdby) return new InvalidDataError();
    // const existentRoadmap = await models.Roadmap.findOne({
    //   where: { name: name },
    // });
    // if (existentRoadmap) return new RoadmapAlreadyExists();
    // return models.sequelize
    //   .transaction(async transaction => {
    //     const roadmapModel = await models.Roadmap.build({ name: name });
    //     roadmapModel.icon = icon;
    //     roadmapModel.createdby = createdby;
    //     roadmapModel.actve = active ? active : false;
    //     const roadmap = await roadmapModel.save({ transaction });
    //     return roadmap;
    //   })
    //   .catch(err => {
    //     return new UnknownError();
    //   });
  }
);

const setToActiveRoadmap = isAuthenticatedResolver.createResolver(
  async (root, { input }) => {
    // const { roadmapId, active } = input;
    // if (!active || !roadmapId) return new InvalidDataError();
    // const Roadmap = await models.Roadmap.findById(roadmapId);
    // let updateRoadmapActive = await Roadmap.update({ active });
    // return updateRoadmapActive;
  }
);

export default {
  Roadmap: {
    modules: getModules,
  },
  Query: {
    RoadmapById,
    RoadmapByActive,
  },
  Mutation: {
    createNewRoadmap,
    setToActiveRoadmap,
  },
};
