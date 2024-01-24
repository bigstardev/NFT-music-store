import axios from "axios";
import { useUserContext } from "src/contexts/UserContext";

type WalletAuthType = {
	data?: WalletAuthDataType;
	meta: WalletAuthMetaType;
}

type WalletAuthDataType = {
	type: string;
	attributes: {
		username: string;
	}
}

type WalletAuthMetaType = {
	wallet_public_address: string;
	message_payload: string;
	signature: string;
}

const baseURL = process.env.BASE_URL;

export const walletAuth = async (data: WalletAuthType) => {
	const walletAuthResp = await axios.post(`${baseURL}/wallet_auth`, data)
	return walletAuthResp?.data?.data
}

export const updateImage = async (id: number, data: FormData, userToken: string | null) => {
	const updateImageResp = await axios.put(`${baseURL}/users/${id}/profile_photo`, data, {
		headers: {
			'Authorization': `${userToken}`,
		}
	})
	return updateImageResp;
}