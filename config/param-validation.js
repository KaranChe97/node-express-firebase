import Joi from 'joi';

export default {
  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    },
    params: {
      userId: Joi.string().hex().required()
    }
  },

  // POST /api/users
  createTimeline: {
    user: {
      uid: Joi.string().required()
    },
    body: {
      title: Joi.string().required(),
      slug: Joi.string().required(),
      content: Joi.string().required(),
      author: Joi.string().required()
    }
  },

    // UPDATE /api/timelies/:timelineId
  updateTimeline: {
    body: {
      title: Joi.string().required(),
      slug: Joi.string().required(),
      content: Joi.string().required(),
      author: Joi.string().required()
    },
    params: {
      timelineId: Joi.string().hex().required()
    }
  },

      // UPDATE /api/timelines/:timelineId
  addComment: {
    user: {
      uid: Joi.string().required()
    },
    body: {
      text: Joi.string().required(),
      author: Joi.string().required()
    },
    params: {
      timelineId: Joi.string().hex().required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  }
};
