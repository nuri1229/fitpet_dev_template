import { HttpService } from '../../../entires/service';

export const getSampleList= () => HttpService.get('../../../asset/dummy/sample-result.json');