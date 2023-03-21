//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Upload {
    //To access
    struct Access {
        address user; //To whom user has accessed
        bool access;
    }

    //Ek user(address) kon kon se images store kr rha h uske liye map banayenge
    //[0x4DF3455656FG => [https://imgurl1.ipfs.com, https://imgurl2.ipfs.com]
    mapping(address => string[]) value;

    //Ek user(address) kon kon se users(adresses) ko access de ha h images dekhne ke liye
    //[0x4DF3455656FG] = [Access{0x6E4567893, true}, Access{0x43DF&GHSDF, true}]
    mapping(address => Access[]) accessList;

    mapping(address => mapping(address => bool)) ownership;

    mapping(address => mapping(address => bool)) previousData;

    function add(address _user, string memory url) external {
        value[_user].push(url);
    }

    function allow(address _user) external {
        ownership[msg.sender][_user] = true;
        if (previousData[msg.sender][_user]) {
            for (uint i = 0; i < accessList[msg.sender].length; i++) {
                if (accessList[msg.sender][i].user == _user) {
                    accessList[msg.sender][i].access = true;
                }
            }
        } else {
            accessList[msg.sender].push(Access(_user, true));
            previousData[msg.sender][_user] = true; //true
        }
    }

    function disallow(address _user) public {
        ownership[msg.sender][_user] = false;
        for (uint i = 0; i < accessList[msg.sender].length; i++) {
            if (accessList[msg.sender][i].user == _user) {
                accessList[msg.sender][i].access = false;
            }
        }
    }

    function display(address _user) external view returns (string[] memory) {
        require(
            _user == msg.sender || ownership[_user][msg.sender],
            "You don't have Access"
        );
        return value[_user];
    }

    function shareAccess() public view returns (Access[] memory) {
        return accessList[msg.sender];
    }
}
