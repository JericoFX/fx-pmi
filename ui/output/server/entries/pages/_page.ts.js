async function fetchNui(eventName, data = {}) {
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(data)
  };
  const resourceName = window.GetParentResourceName ? window.GetParentResourceName() : "nui-frame-app";
  const resp = await fetch(`https://${resourceName}/${eventName}`, options);
  return await resp.json();
}
const load = async ({ params }) => {
  const data = await fetchNui("getData", {});
  console.log(JSON.stringify(data));
  return {
    // playerdata: [
    // 	{
    // 		firstname: 'Jerico',
    // 		lastname: 'FX',
    // 		phone: '099999999',
    // 		citizenid: 'ADS123321',
    // 		rank: 'Liutenent',
    // 		callsign: 'C510',
    // 		radio: 1,
    // 		vehicle: {
    // 			plate: 'ASD123456',
    // 			vehicle: 'Primo'
    // 		},
    // 		duty: true,
    // 		assignment: false
    // 	},
    // 	{
    // 		firstname: 'Jerico',
    // 		lastname: 'FX',
    // 		phone: '099999999',
    // 		citizenid: 'ADS123322',
    // 		rank: 'Liutenent',
    // 		callsign: 'C510',
    // 		radio: 1,
    // 		vehicle: {
    // 			plate: 'ASD123456',
    // 			vehicle: 'Primo'
    // 		},
    // 		duty: true,
    // 		assignment: false
    // 	},
    // 	{
    // 		firstname: 'Jerico',
    // 		lastname: 'FX',
    // 		phone: '099999999',
    // 		citizenid: 'ADS123323',
    // 		rank: 'Liutenent',
    // 		callsign: 'C510',
    // 		radio: 1,
    // 		vehicle: {
    // 			plate: 'ASD123456',
    // 			vehicle: 'Primo'
    // 		},
    // 		duty: true,
    // 		assignment: false
    // 	},
    // 	{
    // 		firstname: 'Jerico',
    // 		lastname: 'FX',
    // 		phone: '099999999',
    // 		citizenid: 'ADS123324',
    // 		rank: 'Liutenent',
    // 		callsign: 'C510',
    // 		radio: 1,
    // 		vehicle: {
    // 			plate: 'ASD123456',
    // 			vehicle: 'Primo'
    // 		},
    // 		duty: true,
    // 		assignment: false
    // 	},
    // 	{
    // 		firstname: 'Jerico',
    // 		lastname: 'FX',
    // 		phone: '099999999',
    // 		citizenid: 'ADS123325',
    // 		rank: 'Liutenent',
    // 		callsign: 'C510',
    // 		radio: 1,
    // 		vehicle: {
    // 			plate: 'ASD123456',
    // 			vehicle: 'Primo'
    // 		},
    // 		duty: true,
    // 		assignment: false
    // 	},
    // 	{
    // 		firstname: 'Jerico',
    // 		lastname: 'FX',
    // 		phone: '099999999',
    // 		citizenid: 'ADS123326',
    // 		rank: 'Liutenent',
    // 		callsign: 'C510',
    // 		radio: 1,
    // 		vehicle: {
    // 			plate: 'ASD123456',
    // 			vehicle: 'Primo'
    // 		},
    // 		duty: true,
    // 		assignment: false
    // 	},
    // 	{
    // 		firstname: 'Jerico',
    // 		lastname: 'FX',
    // 		phone: '099999999',
    // 		citizenid: 'ADS123327',
    // 		rank: 'Liutenent',
    // 		callsign: 'C510',
    // 		radio: 1,
    // 		vehicle: {
    // 			plate: 'ASD1234568',
    // 			vehicle: 'Primo'
    // 		},
    // 		duty: true,
    // 		assignment: false
    // 	},
    // 	{
    // 		firstname: 'Jerico',
    // 		lastname: 'FX',
    // 		phone: '099999999',
    // 		citizenid: 'ADS123329',
    // 		rank: 'Liutenent',
    // 		callsign: 'C510',
    // 		radio: 1,
    // 		vehicle: {
    // 			plate: 'ASD123456',
    // 			vehicle: 'Primo'
    // 		},
    // 		duty: true,
    // 		assignment: false
    // 	},
    // 	{
    // 		firstname: 'Jerico',
    // 		lastname: 'FX',
    // 		phone: '099999999',
    // 		citizenid: 'ADS123320',
    // 		rank: 'Liutenent',
    // 		callsign: 'C510',
    // 		radio: 1,
    // 		vehicle: {
    // 			plate: 'ASD123456',
    // 			vehicle: 'Primo'
    // 		},
    // 		duty: true,
    // 		assignment: false
    // 	},
    // 	{
    // 		firstname: 'Jerico',
    // 		lastname: 'FX',
    // 		phone: '099999999',
    // 		citizenid: 'ADS1233211',
    // 		rank: 'Liutenent',
    // 		callsign: 'C510',
    // 		radio: 1,
    // 		vehicle: {
    // 			plate: 'ASD123456',
    // 			vehicle: 'Primo'
    // 		},
    // 		duty: true,
    // 		assignment: false
    // 	},
    // 	{
    // 		firstname: 'Jeriaco',
    // 		lastname: 'FsX',
    // 		phone: '09922222',
    // 		citizenid: 'ADSasddsa12',
    // 		rank: 'Liutensent',
    // 		callsign: 'C5s10',
    // 		radio: 1,
    // 		vehicle: {
    // 			plate: 'ASD123456',
    // 			vehicle: 'Primo'
    // 		},
    // 		duty: false,
    // 		assignment: false
    // 	},
    // 	{
    // 		firstname: 'Jerissco',
    // 		lastname: 'FX',
    // 		phone: 'sssss',
    // 		citizenid: 'ADS11232332123',
    // 		rank: 'Liutenaent',
    // 		callsign: 'C510',
    // 		vehicle: false,
    // 		duty: false,
    // 		radio: 1,
    // 		assignment: {
    // 			message: 'JERICO'
    // 		}
    // 	}
    // ]
  };
};
export {
  load
};
