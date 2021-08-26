pragma solidity ^0.8.3;

import "@openzeppelin/contracts-upgradeable/token/ERC20/presets/ERC20PresetMinterPauserUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";



contract RoingusToken is Initializable, ERC20PresetMinterPauserUpgradeable {

    // Use safemath lib for arthmetic operations
    using SafeMathUpgradeable for uint256;

    // Token Version
    string public constant version = '2.0.0';

}
