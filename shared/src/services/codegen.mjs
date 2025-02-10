import fs from "node:fs";
import path from "node:path";
import { generateApi } from "swagger-typescript-api";

generateApi({
  // set to `false` to prevent the tool from writing to disk
  output: path.resolve(process.cwd(), "./src/services"),
  url: `${process.env.NEXT_PUBLIC_APP_API_URL}/swagger/doc.json`,
  httpClientType: "axios", // or "fetch"
  toJS: false,
  modular: true,
  moduleNameFirstTag: true,
  generateClient: true,
  addReadonly: true,

  generateRouteTypes: false,
  generateResponses: true,
  extractRequestParams: true,
  extractRequestBody: true,
  extractResponseBody: false,
  extractEnums: true,
  enumNamesAsValues: false,
  unwrapResponseData: true,
  singleHttpClient: true,
  cleanOutput: false,
  generateUnionEnums: true,
  hooks: {
    // TODO :: for future work
    // onPreParseSchema: (originalSchema, typeName, schemaType) => {
    //   if (originalSchema["$ref"]?.includes("DataCount")) {
    //     originalSchema = {
    //       ...originalSchema,
    //       genericArgs: [{ name: "T ", default: "any[]", extends: "any" }],
    //       properties: {
    //         ...originalSchema.properties,
    //       },
    //     }
    //     console.log({ originalSchema, typeName, schemaType })
    //     return originalSchema
    //   }
    // },
    // onParseSchema: (originalSchema, parsedSchema) => {
    //   if (originalSchema["$ref"]?.includes("DataCount")) {
    //     parsedSchema.typeIdentifier = "interface"
    //     // console.log({ originalSchema, parsedSchema })
    //     return parsedSchema
    //   }
    // },
    onFormatTypeName: (typeName, _, schemaType) => {
      if (schemaType === "type-name") {
        return typeName.replace(/(Dtos|Models)/, "");
      }
      return typeName;
    },
  },
})
  /**
   *  @description Creates service instances in index.ts
   */
  .then(({ files }) => {
    const _files = files.filter((file) => file.fileName !== "data-contracts");

    const _importsContent = `${_files
      .map((file) => {
        if (file.fileName === "http-client") {
          return `import { _httpClient } from "./api-config"`;
        }
        return `import { ${file.fileName} } from "./${file.fileName}"`;
      })
      .join("\n")}\n\nexport * from "./data-contracts"\n`;

    const _services = _files.filter((file) => file.fileName !== "http-client");
    const _servicesCreation = `${_services
      .map((file) => {
        return `export const ${toCamelCase(file.fileName)} = new ${
          file.fileName
        }(_httpClient)`;
      })
      .join("\n")}\n`;

    const indexFile = path.resolve(process.cwd(), "./src/services/index.ts");
    fs.writeFileSync(indexFile, `${_importsContent}${_servicesCreation}`);
  })
  // eslint-disable-next-line no-console
  .catch((e) => console.error(e));

function toCamelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}
