import type { CoachResource } from "../types/coachResource";
import DeleteMedia from "./DeleteMedia";
import { useTeam } from "../contexts/TeamContext";
import '../css/CoachResources.css'

function CoachResources({ loadingCoachResources, coachResources, refetch }: {
  loadingCoachResources: boolean;
  coachResources: CoachResource[];
  refetch: () => void;
}) {
    const { teamInfo } = useTeam();

    if (loadingCoachResources) return <div className="loading-state">Loading coach resources...</div>;

  return (
    <div className="resources-container">
        <h3>Coach Resources</h3>
        {coachResources.length === 0 ? (
            <div className="empty-state">Coach hasn't posted resources.</div>
        ) : (
            <div className="resources-grid">
                {coachResources.map(resource => (
                    <div key={resource.post_id} className="resource-card">
                        <div className="media-wrapper">
                            {resource.media_format === 'image' ? (
                                <img src={resource.media_url} alt={resource.caption || "Coach resource"} />
                            ) : resource.media_format === 'video' ? (
                                <video controls>
                                    <source src={resource.media_url} />
                                </video>
                            ) : (
                                <div className="error-placeholder">Format not supported</div>
                            )}
                        </div>

                        <div className="resource-content">
                            <div>
                                <div className="resource-caption">{resource.caption}</div>
                                <div className="resource-date">{new Date(resource.created_at).toLocaleDateString()}</div>
                            </div>

                            {teamInfo?.is_user_coach && (
                                <div className="delete-action">
                                    <DeleteMedia refetch={refetch} postId={resource.post_id} />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            )}
    </div>
  );
}

export default CoachResources;