/* eslint-disable no-console */
import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const name: string = core.getInput('name')

    console.log(`ACTION NAME ${name} STARTED ....`)
    core.debug(`ACTION NAME ${name} STARTED ....`)

    core.debug(new Date().toTimeString())
    core.debug(new Date().toTimeString())

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
