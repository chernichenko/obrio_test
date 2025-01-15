function replacePattern(template: string, variables: Record<string, string>): string {
  return template.replace(/{(\w+)}/g, (_, key) => {
    const value = variables[key];
    return value ? value : `{${key}}`;
  });
}

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function processTemplate(template: string, variables: Record<string, string>): string {
  const replaced = replacePattern(template, variables);
  return capitalizeFirstLetter(replaced);
}
