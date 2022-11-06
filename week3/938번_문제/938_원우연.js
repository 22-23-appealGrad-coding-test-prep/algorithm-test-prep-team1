var rangeSumBST = (root, low, high) => {
    let sum = 0;
    const traverse = (root) => {
        if (root.val >= low && root.val <= high){
             sum += root.val;
        }
        if (root.left !== null) {
            traverse(root.left);
        }
        if (root.right !== null) {
            traverse(root.right);
        }
    }
    traverse(root);
    return sum;
};