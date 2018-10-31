/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {zw.isoc.biz.SampleTransaction} sampleTransaction
 * @transaction
 */
async function sampleTransaction(tx) {
    // Save the old value of the asset.
    const oldValue = tx.asset.value;

    // Update the asset with the new value.
    tx.asset.value = tx.newValue;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('zw.isoc.biz.SampleAsset');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('zw.isoc.biz', 'SampleEvent');
    event.asset = tx.asset;
    event.oldValue = oldValue;
    event.newValue = tx.newValue;
    emit(event);
}

/**
 * Sample transaction
 * @param {zw.isoc.biz.DeviceTransaction} deviceTransaction
 * @transaction
 */

 async function deviceTransaction(tx){
    //update assset with the source IP address from the iot device 
    tx.deviceRequest.sourceIp=tx.sourceIp;
    //update asset with the destination IP to which the iot device is sending requests to
     tx.deviceRequest.destinationIp=tx.destinationIp;
     //get the asset registry 
     const assetRegistry = await getAssetRegistry('zw.isoc.biz.DeviceRequest');
     //update the diviceAsset using the device registry
     await assetRegistry.update(tx.deviceRequest);
     //emit an event for the modified device request
     let event = getFactory().newEvent('zw.isoc.biz','DeviceEvent')
     event.deviceRequest=tx.deviceRequest;
     event.sourceIp=tx.sourceIp;
     event.destinationIp=tx.destinationIp;
     emit(event);

 }
