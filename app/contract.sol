// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RoomAccess {
    address public owner;
    mapping(address => uint256) public balances;

    // Define the prices for different room types
    uint256 private constant PRIVATE_ROOM_PRICE = 10 ether;
    uint256 private constant MEETING_ROOM_PRICE = 50 ether;
    uint256 private constant LECTURE_ROOM_PRICE = 100 ether;

    // Define events for logging room access
    event PrivateRoomAccess(address indexed user, uint256 amount);
    event MeetingRoomAccess(address indexed user, uint256 amount);
    event LectureRoomAccess(address indexed user, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    // Function to allow users to access a private room by paying the fee
    function accessPrivateRoom() public payable {
        require(msg.value >= PRIVATE_ROOM_PRICE, "Insufficient payment for private room");
        balances[msg.sender] += msg.value;
        emit PrivateRoomAccess(msg.sender, msg.value);
    }

    // Function to allow users to access a meeting room by paying the fee
    function accessMeetingRoom() public payable {
        require(msg.value >= MEETING_ROOM_PRICE, "Insufficient payment for meeting room");
        balances[msg.sender] += msg.value;
        emit MeetingRoomAccess(msg.sender, msg.value);
    }

    // Function to allow users to access a lecture room by paying the fee
    function accessLectureRoom() public payable {
        require(msg.value >= LECTURE_ROOM_PRICE, "Insufficient payment for lecture room");
        balances[msg.sender] += msg.value;
        emit LectureRoomAccess(msg.sender, msg.value);
    }

    // Function to withdraw contract balance by the owner
    function withdrawBalance() public {
        require(msg.sender == owner, "Only the owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
}
