import { HttpService } from '../../../entires/service';

export const getSampleList= (url: string) => HttpService.get('../../../asset/dummy/sample-result.json');