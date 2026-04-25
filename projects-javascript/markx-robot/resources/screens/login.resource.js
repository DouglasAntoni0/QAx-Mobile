const API_IP = '192.168.1.166';

async function doLogin() {
    const apiIpInput = await $('//*[@resource-id="apiIp"]');
    await apiIpInput.setValue(API_IP);

    const signInButton = await $('//*[@resource-id="signInButton"]');
    await signInButton.click();
}

module.exports = {
    doLogin
};
