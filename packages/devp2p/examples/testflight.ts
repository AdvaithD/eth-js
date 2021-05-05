// Run using: node -r ts-node/register testflight.ts
import chalk from 'chalk'
import Common from '@ethereumjs/common'
import {DPT } from '../src/index'

const config = new Common({
  chain: 'mainnet'
})

const bootNodes = config.bootstrapNodes()

const BOOTNODES = bootNodes.map((node: any) => {
  console.log(chalk.redBright(node.io, node.port, node.port))
})