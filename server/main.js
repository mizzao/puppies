import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

  if (Pictures.find().count() == 0) {

    [
    "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e15/c0.80.640.640/22426715_353378708443726_3652344981978349568_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e15/c0.80.640.640/22280596_1930686757148947_4883470238953242624_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e15/c0.80.640.640/22352084_1661999920509599_2964494025219899392_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/22352072_2424367881121090_3804593502378000384_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e15/22280085_217098962159752_1257581813136621568_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/22280551_1531011413658590_1448619823863955456_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/22427004_319252481875853_1016314022443614208_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22280522_1943755142561401_3913099378595725312_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e15/22430022_1497493823699757_3060649241941639168_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/c236.0.608.608/22352241_1521141718007395_2169405388712050688_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c135.0.810.810/22278288_1826322760992380_4400606698159472640_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/22280717_179697482604799_1598117306041368576_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22351770_121865671861124_5644322020402397184_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.0.1080.1080/22430288_494527537592736_1443425322912448512_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.133.1080.1080/22280397_135477170515717_2044567388250177536_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22344529_146393859304384_4216145905859952640_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/22351805_1258669077571385_7977829553919754240_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22427472_348885315538137_66825250129575936_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22278115_1990953871147650_2800749947543093248_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22280725_253876555134993_9340170889330688_n.jpg",
     "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22344643_343067156098912_3460589591453499392_n.jpg"
  ].forEach(function(url) {
    Pictures.insert({url})
  })

  }
});
