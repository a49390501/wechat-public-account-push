export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx079ed8e5063c396a",
    // 公众号appSecret
    appSecret: "e6871e85455f36e9e0428a665f6e1935",
    // 模板消息id
    templateId: "hi-YFsYjQgQLjhAAQ89eQEYpA75LeqOTp2GSw0-vbxA",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如[, "wx2"]
    user: ["oPspB6ZDbHpM-BThvMXdE1S1ei2M"],
     
    // 信息配置
    // 所在省份
    province: "河南",
    // 所在城市
    city: "安阳",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "小李", "year": "1999", "date": "12-01", "type": 'new'},
      {"name": "老张", "year": "2000", "date": "11-03", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-06-06",
    // 结婚纪念日
    marryDate: "2022-06-06"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
