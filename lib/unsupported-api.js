/**
 * @fileoverview APIs that are not officially supported by ESLint.
 *      These APIs may change or be removed at any time. Use at your
 *      own risk.
 * @author Nicholas C. Zakas
 */

"use strict";

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

const { FileEnumerator } = require("./cli-engine/file-enumerator");
const { FlatESLint, shouldUseFlatConfig } = require("./eslint/flat-eslint");
const { ESLint } = require("./eslint");
const FlatRuleTester = require("./rule-tester/flat-rule-tester");

async function getESLintEngine(...args) {
    if (await shouldUseFlatConfig(true)) {
        return new FlatESLint(...args);
    } else {
        return new ESLint(...args);
    }
}

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

module.exports = {
    builtinRules: require("./rules"),
    FlatESLint,
    getESLintEngine,
    shouldUseFlatConfig,
    FlatRuleTester,
    FileEnumerator
};
