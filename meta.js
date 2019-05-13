module.exports = {
  helpers: {
    is_belle: function(group, options) {
      if (/^belle+$/g.test(group)) {
        return options.fn(this);
      }
      console.log(options);
      //运行结果为假
      return options.inverse(this);
    }
  },
  prompts: {
    name: {
      type: 'input',
      required: true,
      message: '项目名称'
    },
    version: {
      type: 'input',
      message: '版本号',
      default: '1.0.0',
      validate: function(_v) {
        if (/^\d+(.\d)+$/g.test(_v)) {
          return true;
        }
        return '版本号不合法 例：1.0.0';
      }
    },
    author: {
      type: 'input',
      required: true,
      message: '作者'
    },
    description: {
      type: 'input',
      required: true,
      message: '项目描述'
    },
    ctype: {
      type: 'list',
      required: true,
      message: '组件类型',
      choices: [
        {
          name: '业务通用组件',
          value: 'bizCom',
          short: '业务组件'
        },
        {
          name: '普通通用组件',
          value: 'commonCom',
          short: '普通组件'
        }
      ]
    }
  }
};
