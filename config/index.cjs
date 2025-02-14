/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx00b5f2eefd85a8d7',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd5fe42db43eacd401426fb64486aef2d',

  PROVINCE: '辽宁',
  CITY: '沈阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝老婆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oT50X6Zy7Y81l0DaoMlQ9AMg-mFU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'TW_uzea7E71IIsjb2Jv6PiZ1OeWw4Zjda3Vb5f0fr3E',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-03',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2002', date: '09-29',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '2002', date: '11-03',
        },
        {
          type: '节日', name: '相识纪念日', year: '2024', date: '01-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-01-01' },
        // 相识纪念日
        { keyword: 'meet_day', date: '2023-12-29' },
      ],
    },
  ],
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    { keyword: 'lover_prattle', contents: '今天刘玉麟也喜欢杜佳颖宝宝' },
    ],
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'd1KNA2wi68OZ4aA2UEZrDRFBWcPMTRsPJMymx_W8dco',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oT50X6RdZ1GEbnWyvN6p4NKiNuJw',
    }
  ],

}

module.exports = USER_CONFIG

