export default function useAuth() {

    const supabase = useSupabaseClient();
    const user = useSupabaseUser();

    const signInWithGithub = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: window.location.origin
            }
        });

        if (error) console.error(error);
    };

    const signOut = async () => {
        await supabase.auth.signOut();
    };

    return {
        user,
        signInWithGithub,
        signOut
    };
};