import { $api } from "../http"

export default class DeviceService{
    static async getDeviceById(id){
        const resp = await $api.get("device/" + id);
        resp.data.price = parseInt(resp.data.price); 
        resp.data.info = resp.data.info.map(x => ({ name: x.name, value: x.value }));

        return resp;
    }

    static async getDevices(params){
        const resp = await $api.get("device", {params})
        resp.data.rows = resp.data.rows.map(elem => ({...elem, price: parseInt(elem.price)}))
        return resp;
    }

    static async getTypeById(id){
        return await $api.get("type",{params:{id}});
    }

    static async getBrandsByType(typeId){
        const resp = await $api.get("brand/type", {params:{typeId}})
        const data = resp.data.map(item => ({
            id: item.id,
            typeId: item.device_types[0].id, 
            brandName: item.name,
        }));
        return {...resp, data:data};
    }
}