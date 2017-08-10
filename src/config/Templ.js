let EmptyTemplate = {
      data : {
        notices:{
          carousels:[
            {name : '',href : '',src : ''}
          ],
          notice_1:{
            title:'通知公告',
            content:[
              {text:'',href:''}
            ]
          },
          notice_2:{
            title:'校园活动',
            content:[
              {text:'',href:''}
            ]
          }
        },
        apps:[
          [
            {icon:'', name:'', href: ''}
          ]
        ],
        school_intro:{
          group:{
            data:[
              {
                name:'',
                avatar:'',
                url:''
              }
            ]
          },
          members:0
        },
        teachers:[
          {
            data:[
              {
                avatar: '',
                nickName: '',
                url : ''
              }
            ]
          }
        ]
      },
      listConf:[
		  		{
		  			name: '查看简介',
		  			href: '#'
		  		},
		  		{
		  			name: '机构群(0)',
		  			href: '#'
		  		},
		  		{
		  			name: '本校成员:0',
		  			href: '#'
		  		},
		  		{
		  			name: '加为好友',
		  			href: 'http://www.yiban.cn/simple/needlogin'
		  		}
        ]
    }
    export default EmptyTemplate