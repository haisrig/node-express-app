const fs = require('fs');
const yaml = require('js-yaml');
const core = require('@actions/core');

function run() {
    const branchName = core.getInput('branch-name');
    let branchType = "feature";
    if(branchName == "develop") {
        branchType = "develop";
    } else if (branchName.startsWith("release")) {
        branchType = "release";
    } else if (branchName == "prod" || branchName == "master" || branchName == "main") {
        branchType = "prod";
    }

    const repoConfig = yaml.load(fs.readFileSync('config.yaml', 'utf8'));
    console.log(typeof repoConfig);
    console.log("..........................")
    const branchConfig = repoConfig.branches.filter(branch => branch.name == branchType)
    console.log("Branch Config:", branchConfig);
    core.setOutput("build_type", repoConfig.build_type);
    core.setOutput("static_code_analysis", repoConfig.static_code_analysis);


    // core.setOutput("build_type", branchConfig.build_type);
    // core.setOutput("build_type", branchConfig.build_type);

}

run()