import { useEffect } from "react";

export type DataToStore = { [key: string]: any };

export function useUpdateStorage<DataToStore>(prefix: string, dataToStore: DataToStore) {
	const updateStorage = () => {
		for (const attribute in dataToStore) {
			setItemToStorage(prefix, attribute, dataToStore[attribute]);
		}
	};

	useEffect(() => {
		window.addEventListener("unload", updateStorage);
		return () => {
			window.removeEventListener("unload", updateStorage);
		};
	}, [prefix, dataToStore]);
}

export function getItemFromStorage<T>(prefix: string, attribute: string, defaultValue?: T): T | null | undefined {
	try {
		const key = storageKey(prefix, attribute);
		const storedValue = window.localStorage.getItem(key);
		switch (storedValue) {
			case "undefined":
				return undefined;
			case "null":
				return null;
			default:
				return storedValue === null ? defaultValue : JSON.parse(storedValue);
		}
	} catch (error) {
		console.error(error);
		return defaultValue;
	}
}

export function setItemToStorage<T>(prefix: string, attribute: string, value: T) {
	try {
		const key = storageKey(prefix, attribute);
		switch (value) {
			case undefined:
				window.localStorage.setItem(key, "undefined");
				break;
			case null:
				window.localStorage.setItem(key, "null");
				break;
			default:
				window.localStorage.setItem(key, JSON.stringify(value));
		}
	} catch (error) {
		console.error(error);
	}
}

const storageKey = (prefix: string, attribute: string) => `${prefix}.${attribute}`;
