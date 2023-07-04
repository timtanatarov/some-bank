export const splitByFirstMatch = (target: string, matchString: string) => {
    const matchPattern = new RegExp(matchString, 'i');
    const matchIndex = target.match(matchPattern)?.index;
    if (matchIndex === undefined) throw new Error('Target string must contain matchString (non-case-sensitive)');
    const startingContent = target.slice(0, matchIndex);
    const matchingContent = target.slice(matchIndex, matchIndex + matchString.length);
    const restContent = target.slice(matchIndex + matchString.length);

    return [startingContent, matchingContent, restContent];
};
