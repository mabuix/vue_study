import Masto from 'mastodon'
import Config from '../config/index'

export const M = new Masto({
    access_token: Config.access_token,
    api_url: 'https://mstdn.jp/api/v1/'
})