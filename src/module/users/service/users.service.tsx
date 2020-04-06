import { HttpService } from '../../../entires/service';

const API_HOST = 'http://fitpet-front-storage-prod.s3-website.ap-northeast-2.amazonaws.com';

export const getUserList= (url: string) => HttpService.get(`${API_HOST}/users_dummy.json`);
