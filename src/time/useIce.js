// 制冰周期 分钟
const iceMakingCycle = 20
// 需要制冰的周期总数
const needCycle = 3
// 当前时间
const now = Date.now()
// 用冰时间
let useIceTime = null;
// 几点需要用冰 9点
const useIceTimeClock = 9
// 如果已过今天的用冰时间，则顺延到下一天
const now1 = new Date();
now1.setHours(useIceTimeClock)
now1.setMinutes(0)
const now1Time = now1.getTime();
console.log(now1Time, now, now1Time < now);
if (now1Time < now) {
    useIceTime = now1.setDate(now1.getDate() + 1)
} else {
    useIceTime = now1Time;
}

// 计算多久后开机制冰
const duration = useIceTime - now;
console.log(new Date(now).toString())
console.log(new Date(useIceTime).toString())
console.log(duration)
console.log(duration/1000/60/60)