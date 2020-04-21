function formatNumber(n) {
    const str = n.toString()
    return str[1] ? str : `0${str}`
}

export function formatTime(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const t1 = [year, month, day].map(formatNumber).join('/')
    const t2 = [hour, minute, second].map(formatNumber).join(':')

    return `${t1} ${t2}`
}

function getUserInfo() {
    return new Promise((resolve, reject) => {
        wx.getUserInfo({
            success: function(res) {
                resolve(res.userInfo);
            },
            fail(err) {
                reject(err);
            }
        })
    })
}

function getOpenid() {
    return new Promise((resolve, reject) => {
        wx.login({
            success(res) {
                if (res.code) {
                    // 获取openid；
                    wx.request({
                        url: `https://api.weixin.qq.com/sns/jscode2session?appid=wx001d76e76040ab4e&secret=60e92bc8b8a888b38b473b7a72106091&js_code=${res.code}&grant_type=authorization_code`,
                        success: (res) => {
                            console.log(res);
                            resolve(res.data.openid);
                        },
                        fail(err) {
                            reject(err);
                        }
                    })
                }
            }
        })
    })
}

export default {
    formatNumber,
    formatTime,
    getUserInfo,
    getOpenid
}