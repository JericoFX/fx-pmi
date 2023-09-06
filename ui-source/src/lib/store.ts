import { writable, type Writable } from 'svelte/store';

import type { PlayersData, MyData } from './types';
const store = () => {
	const data = {
		playerData: writable([]),
		myData: writable<Writable<MyData>>({}),
		open: writable<boolean>(false)
	};
	const { update, subscribe, set } = writable(data);
	const methods = {
		setData: (datas: PlayersData[]) => {
			data.playerData.set(datas);
		},
		updateDuty: (cid: string, duty: boolean) => {
			data.playerData.update((e) => {
				const _d = e.filter((s: { citizenid: string }) => s.citizenid === cid)[0];
				_d.duty = duty;
				// eslint-disable--line no-self-assign
				e = e;
				return e;
			});
		},
		changeVehicle: (cid) => {
			data.playerData.update((e) => {
				const _d = e.filter((s) => s.citizenid === cid)[0];
				_d.vehicle = null;
				e = e;
				return e;
			});
		},
		changeNUI: (op: boolean) => {
			data.open.set(op);
		}
	};
	return {
		update,
		set,
		subscribe,
		...data,
		...methods
	};
};

export default store;
