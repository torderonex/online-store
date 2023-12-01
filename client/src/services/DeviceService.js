import { $api } from "../http"

export default class DeviceService{
    static async getDeviceById(id){
        const resp = await $api.get("device/" + id);
        resp.data.price = parseInt(resp.data.price); 
        resp.data.info = resp.data.info.map(x => ({ name: x.name, value: x.value }));

        return resp;
    }

    static async getDevices(brandId, typeId, limit, page){
        return await $api.get("device/")

    }
}